import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import GlobalStyle from '../../assets/styles/style';
import menu3 from '../../assets/images/seafood.png';

const SearchRecipe = () => {
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

      {/* Outpus Search */}
      <View style={{marginTop: 16}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
          }}>
          <Image
            source={menu3}
            style={{width: 64, height: 64, resizeMode: 'cover'}}
          />
          <View style={{marginStart: 14}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Black Fish</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 6,
                // backgroundColor: 'yellow',
              }}>
              <AwesomeIcon
                name="star"
                solid
                color={GlobalStyle.colors.font_primary}
              />
              <Text style={{marginStart: 4}}>4.3 | Seafood</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchRecipe;

const styles = StyleSheet.create({
  search__wrapper: {
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: GlobalStyle.colors.bg_third,
    alignItems: 'center',
  },
});
