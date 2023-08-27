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
import fakeImage from '../../assets/images/AuthPhoto.png';

const DetailPopularRecipe = () => {
  return (
    <>
      <ScrollView style={GlobalStyle.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        {/* Card */}
        <View style={{marginTop: 16}}>
          <View style={styles.recipePopular__wrapper}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image source={fakeImage} style={styles.styleImage} />
              </View>
              <View style={{marginStart: 8}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Nasi Goreng Bali
                </Text>
                <Text>Main Menu</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name="user"
                    size={16}
                    color={GlobalStyle.colors.font_primary}
                  />
                  <Text>Muhammad Faisal</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View>
                <Icon
                  name="bookmark"
                  color="#FFFFFF"
                  size={18}
                  style={styles.iconStyle}
                />
              </View>
              <View>
                <Icon
                  name="thumbs-up"
                  color="#FFFFFF"
                  size={18}
                  style={[
                    styles.iconStyle,
                    {
                      marginStart: 4,
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailPopularRecipe;

const styles = StyleSheet.create({
  recipePopular__wrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: GlobalStyle.colors.bg_third,
    justifyContent: 'space-between',
    padding: 6,
    borderRadius: 8,
    boxWithShadow: {
      elevation: 8,
    },
  },
  styleImage: {
    width: 72,
    height: 72,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  iconStyle: {
    padding: 4,
    backgroundColor: GlobalStyle.colors.font_primary,
    borderRadius: 4,
  },
});
