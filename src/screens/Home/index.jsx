import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

// import components
// import CardPopularRecipe from '../../components/CardPopularRecipe';

// import fakedata recipe popular
import dataPopularRecipe from '../../assets/data/popularRecipe';
import menu1 from '../../assets/images/soup.png';
import menu24 from '../../assets/images/chicken-dessert.png';
import menu3 from '../../assets/images/seafood.png';

import Icon from 'react-native-vector-icons/Feather';

import GlobalStyle from '../../assets/styles/style';

const Home = () => {
  return (
    <ScrollView style={[GlobalStyle.container, {marginTop: 16}]}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <View style={styles.search__wrapper}>
        <Icon
          style={{paddingHorizontal: 8}}
          name="search"
          size={24}
          color={GlobalStyle.colors.font_secondary}
        />
        <TextInput
          placeholder="Search Pasta, Bread, etc"
          placeholderTextColor={GlobalStyle.colors.font_secondary}
          style={{color: GlobalStyle.colors.font_primary}}
        />
      </View>

      <View style={{marginVertical: 16}}>
        <View>
          <Text style={styles.textTitle}>Popular Recipes</Text>
          <Text style={styles.textSubTitle}>Popular Recipes</Text>
        </View>
        <View style={{marginTop: 12}}>
          <FlatList
            horizontal
            // keyExtractor={item => item.id}
            data={dataPopularRecipe}
            renderItem={({item}) => (
              <View style={styles.image__wrapper}>
                <Image source={item.image} style={styles.image__style} />
                <Text style={styles.title__overlay}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </View>

      <View style={{marginVertical: 16}}>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textTitle}>New Recipe</Text>
            <TouchableOpacity>
              <Text>More info</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* menu */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
          }}>
          <TouchableOpacity>
            <Image source={menu1} style={{width: 64, height: 64}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={menu24} style={{width: 64, height: 64}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={menu3} style={{width: 64, height: 64}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={menu24} style={{width: 64, height: 64}} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Popular for you */}
      <View style={{marginTop: 16}}>
        <View>
          <Text style={styles.textTitle}>Popular for you</Text>
        </View>
        <View style={{marginTop: 12}}>
          <FlatList
            horizontal
            // keyExtractor={item => item.id}
            data={dataPopularRecipe}
            renderItem={({item}) => (
              <View style={styles.image__wrapper_4U}>
                <Image source={item.image} style={styles.image__style} />
                <View style={styles.overlay_4U}>
                  <Text style={styles.title4U}>{item.title}</Text>
                  <Text style={{fontSize: 10, marginStart: 10}}>
                    {item.desc}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  search__wrapper: {
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: GlobalStyle.colors.bg_third,
    alignItems: 'center',
  },

  // Styleing for popular recipe
  textTitle: {
    fontSize: 16,
  },
  textSubTitle: {
    color: GlobalStyle.colors.font_secondary,
    fontSize: 12,
  },
  image__wrapper: {
    width: 300,
    maxHeight: 180,
    marginEnd: 16,
  },

  image__style: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginEnd: 16,
    maxHeight: 180,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },

  title__overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  // Styling for New Recipe

  image__wrapper_4U: {
    width: 200,
    maxHeight: 140,
    marginEnd: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 40,
      width: 40,
    },
  },

  overlay_4U: {
    width: '100%',
    height: 52,
    backgroundColor: GlobalStyle.colors.bg_third,
    position: 'absolute',
    bottom: 0,
    left: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyle.colors.font_secondary,
    overflow: 'hidden',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },

  title4U: {
    marginLeft: 10,
    marginTop: 4,
  },
});
