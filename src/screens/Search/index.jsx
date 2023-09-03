import React, {useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';

import {getMenu, searchMenu} from '../../storages/actions/recipe';
import {FlatList} from 'react-native-gesture-handler';

const SearchRecipe = () => {
  const dispatch = useDispatch();

  const menu = useSelector(state => state.menu);
  // const {data, errorMessage, isLoading, isError} = menu.menu;
  let data = menu.data;

  const [search, setSearch] = useState('');

  console.log('ini data search', menu);

  useEffect(() => {
    dispatch(searchMenu(search));
    search == '' && dispatch(getMenu());
  }, [search]);

  return (
    <View style={[GlobalStyle.container, {paddingTop: 40}]}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <View style={styles.search__wrapper}>
        <Icon
          style={{paddingHorizontal: 8}}
          name="search"
          size={24}
          color={GlobalStyle.colors.font_secondary}
        />
        <TextInput
          focus={true}
          value={search}
          onChangeText={value => setSearch(value)}
          placeholder="Search Pasta, Bread, etc"
          placeholderTextColor={GlobalStyle.colors.font_secondary}
          style={{color: GlobalStyle.colors.font_primary}}
        />
      </View>

      {/* Outpus Search */}
      <View style={{marginTop: 16}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Image
                source={{uri: item.photo}}
                style={{
                  width: 64,
                  height: 64,
                  resizeMode: 'cover',
                  backgroundColor: 'gray',
                  borderRadius: 14,
                }}
              />
              <View style={{marginStart: 14}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  {item.title}
                </Text>
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
                  <Text style={{marginStart: 4}}>4.3 | {item.category}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
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
