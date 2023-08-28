import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import GlobalStyle from '../../assets/styles/style';
import Icon from 'react-native-vector-icons/Feather';

import fakeImage from '../../assets/images/AuthPhoto.png';

const MyRecipe = () => {
  return (
    <View style={[{paddingTop: 40}]}>
      <StatusBar backgroundColor="#F5F5F5" translucent={true} />
      <ScrollView>
        <View style={{alignItems: 'center', marginBottom: 16}}>
          <Text style={{fontSize: 22, color: GlobalStyle.colors.font_primary}}>
            My Recipe
          </Text>
        </View>

        <View style={{paddingHorizontal: 16}}>
          <View style={styles.myRecipe__wrapper}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image source={fakeImage} style={styles.styleImage} />
              </View>
              <View style={{marginStart: 8}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Nasi Goreng Bali
                </Text>
                <Text>Main Menu</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity>
                <Icon
                  name="edit"
                  color="#FFFFFF"
                  size={18}
                  style={[styles.iconStyle, {backgroundColor: 'blue'}]}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="trash"
                  color="#FFFFFF"
                  size={18}
                  style={[styles.iconStyle, {backgroundColor: 'red'}]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyRecipe;

const styles = StyleSheet.create({
  myRecipe__wrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: GlobalStyle.colors.bg_primary,
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
    borderRadius: 4,
  },
});
