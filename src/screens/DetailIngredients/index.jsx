import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import fakePhoto from '../../assets/images/AuthPhoto.png';
import GlobalStyle from '../../assets/styles/style';

import {menuById} from '../../storages/actions/recipe';
import {useDispatch, useSelector} from 'react-redux';

const DetailIngredients = ({route}) => {
  const dispatch = useDispatch();
  const {itemId} = route.params;
  // console.log('menu by id detailingerefed', itemId);
  const menuDetail = useSelector(state => state.menuByIdReducer);

  useEffect(() => {
    dispatch(menuById(itemId));
  }, []);

  const ingredientsSplit = menuDetail.data.data.ingredients.split(',');

  console.log('ini menu detail', menuDetail);
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View>
        <View style={{width: '100%', height: 420}}>
          <Image
            source={fakePhoto}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
          <View style={styles.cardOverlay}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{color: 'white', fontSize: 24, maxWidth: 280}}>
                  {menuDetail.data.data.title}
                </Text>
                <Text style={{color: 'white'}}>
                  Author: {menuDetail.data.data.users_id}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity>
                  <Icon
                    name="bookmark"
                    color="#EFC81A"
                    size={24}
                    style={[
                      styles.iconStyle,
                      {backgroundColor: 'white', marginEnd: 8},
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="thumbs-up"
                    color="#EFC81A"
                    size={24}
                    style={[styles.iconStyle, {backgroundColor: 'white'}]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.cardIngredients}>
            <View style={{padding: 16}}>
              <Text style={{fontSize: 18, color: 'black', marginBottom: 20}}>
                Ingredients
              </Text>
              <View>
                {ingredientsSplit.map((ingredient, index) => (
                  <Text key={index}>
                    <Icon name="stop-circle" size={12} /> {ingredient.trim()}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailIngredients;

const styles = StyleSheet.create({
  cardOverlay: {
    position: 'absolute',
    width: '100%',
    height: 100,
    bottom: 10,
    paddingHorizontal: 16,
    color: 'white',
  },
  iconStyle: {
    padding: 4,
    borderRadius: 4,
  },

  cardIngredients: {
    position: 'relative',
    borderRadius: 20,
    top: -20,
    height: 450,
    width: '100%',
    backgroundColor: GlobalStyle.colors.bg_third,
  },
});
