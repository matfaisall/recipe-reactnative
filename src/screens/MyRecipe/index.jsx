import React, {useEffect} from 'react';
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

// import fakeImage from '../../assets/images/AuthPhoto.png';

import {getMyMenu} from '../../storages/actions/recipe';
import {deleteMenu} from '../../storages/actions/recipe';

import {useDispatch, useSelector} from 'react-redux';

const MyRecipe = ({navigation}) => {
  const myMenu = useSelector(state => state.myMenu);
  // const deleteMyMenu = useSelector(state => state.deleteMyMenuReducer);
  let data = myMenu.data;
  // console.log(myMenu);
  const dispatch = useDispatch();

  const handlerDelete = itemId => {
    dispatch(deleteMenu(itemId));
  };

  useEffect(() => {
    getMyMenu();
  }, []);

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
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}) => (
            <ScrollView>
              <View style={{paddingHorizontal: 16}}>
                <View style={[styles.myRecipe__wrapper]}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Image source={item.image} style={styles.styleImage} />
                    </View>
                    <View style={{marginStart: 8}}>
                      <Text
                        style={{fontSize: 16, fontWeight: 'bold'}}
                        onPress={() =>
                          navigation.navigate('DetailIngredients', {
                            itemId: item.id,
                          })
                        }>
                        {item.title}
                      </Text>
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

      {/* <View
        style={{
          paddingHorizontal: 16,
          backgroundColor: 'yellow',
        }}>
        <FlatList
          nestedScrollEnabled
          data={myMenu}
          renderItem={({item}) => (
            <View>
              <View style={styles.myRecipe__wrapper}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image source={fakeImage} style={styles.styleImage} />
                  </View>
                  <View style={{marginStart: 8}}>
                    <Text
                      style={{fontSize: 16, fontWeight: 'bold'}}
                      onPress={() => navigation.navigate('DetailIngredients')}>
                      {item.title}
                    </Text>
                    <Text>{item.category}</Text>
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
          )}
        />
      </View> */}
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
