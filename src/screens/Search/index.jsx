import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import GlobalStyle from '../../assets/styles/style';
import {useDispatch, useSelector} from 'react-redux';

import {getMenu, searchMenu} from '../../storages/actions/recipe';
import {FlatList} from 'react-native-gesture-handler';

const SearchRecipe = () => {
  const dispatch = useDispatch();

  const menu = useSelector(state => state.menu);
  // const {data, errorMessage, isLoading, isError} = menu.menu;
  let data = menu.data;

  console.log('ini menu', menu);
  console.log('ini data', data);

  const [search, setSearch] = useState('');
  // const [page, setPage] = useState(1);

  // const goToPage = pageNumber => {
  //   if (pageNumber >= 1 && pageNumber <= menu?.pages.totalPage) {
  //     setPage(pageNumber);
  //   }
  // };

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
                source={{uri: item.image}}
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
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => goToPage(page - 1)}>
            <Text>Prev</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>
            Halaman {page} dari {data?.pages.totalPage}
          </Text>
          <TouchableOpacity onPress={() => goToPage(page + 1)}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Icon
              name="chevrons-left"
              size={24}
              color={GlobalStyle.colors.font_secondary}
            />
            {/* <Text>Prev</Text> */}
          </TouchableOpacity>
          <Text style={{fontSize: 14}}>Halaman 1 dari 1</Text>
          <TouchableOpacity>
            <Icon
              name="chevrons-right"
              size={24}
              color={GlobalStyle.colors.font_secondary}
            />
            {/* <Text>Next</Text> */}
          </TouchableOpacity>
        </View>
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
