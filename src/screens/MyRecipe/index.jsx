import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import GlobalStyle from '../../assets/styles/style';
import Icon from 'react-native-vector-icons/Feather';
import {getMyMenu, deleteMenu} from '../../storages/actions/recipe';

import {useDispatch, useSelector} from 'react-redux';

const MyRecipe = ({navigation}) => {
  const dispatch = useDispatch();

  const {data, isLoading} = useSelector(state => state.myMenu);

  console.log('ini my data', data, isLoading);

  const handlerDelete = itemId => {
    dispatch(deleteMenu(itemId));
  };

  // useEffect(() => {
  //   getMyMenu();
  // }, []);

  useEffect(() => {
    dispatch(getMyMenu());
  }, []);

  return (
    <View style={[{paddingTop: 40}]}>
      <StatusBar backgroundColor="#F5F5F5" translucent={true} />
      <View style={{alignItems: 'center', marginBottom: 16}}>
        <Text style={{fontSize: 22, color: GlobalStyle.colors.font_primary}}>
          My Recipe
        </Text>
      </View>

      <View>
        <FlatList
          vertical
          keyExtractor={item => item.id}
          data={data?.data}
          renderItem={({item}) => (
            <ScrollView>
              <View style={{paddingHorizontal: 16}}>
                <View style={[styles.myRecipe__wrapper]}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      {item.image ? (
                        <Image
                          source={{uri: item.image}}
                          style={styles.styleImage}
                        />
                      ) : null}
                    </View>
                    <View style={{marginStart: 8}}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.push('DetailIngredients', {
                            itemId: item.id,
                          })
                        }>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                      <Text>{item.category}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('UpdateRecipe', {itemId: item.id})
                      }>
                      <Icon
                        name="edit"
                        color="#FFFFFF"
                        size={18}
                        style={[styles.iconStyle, {backgroundColor: 'blue'}]}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlerDelete(item.id)}>
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
          )}
        />
      </View>
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
    marginBottom: 10,
  },
  styleImage: {
    width: 72,
    height: 72,
    resizeMode: 'cover',
    borderRadius: 8,
    backgroundColor: 'gray',
  },
  iconStyle: {
    padding: 4,
    borderRadius: 4,
  },
});
