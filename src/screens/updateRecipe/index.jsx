import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import GlobalStyle from '../../assets/styles/style';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'react-native-image-picker';

import {menuById, updateMenu} from '../../storages/actions/recipe';
import {useDispatch, useSelector} from 'react-redux';

const UpdateRecipe = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector(state => state.menuByIdReducer);

  const {itemId} = route.params;
  const recipeId = data?.data;
  console.log('ini recipe', recipeId);
  console.log('ini itemid', itemId);
  console.log('ini data', data?.data);

  const valueCategory = data?.data.category_id;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    {label: 'Main course', value: '1'},
    {label: 'Appetizer', value: '2'},
    {label: 'Dessert', value: '3'},
  ]);
  const [recipePicture, setRecipePicture] = useState(data?.data.image);
  // console.log(recipePicture);

  const [inputData, setInputData] = useState({
    title: '',
    ingredients: '',
    category_id: '',
    image_url: '',
  });
  console.log('ini value', value);
  console.log('ini input data', inputData);

  useEffect(() => {
    dispatch(menuById(itemId));
  }, []);

  useEffect(() => {
    if (data) {
      setInputData({
        title: data?.data.title,
        ingredients: data?.data.ingredients,
        category_id: value,
        image_url: data?.data.image,
      });
      setValue(data?.data.category_id);
    }
  }, [data]);

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('user cancel galery');
      } else if (response.error) {
        console.log('Image picker error', response.errorMessage);
      } else {
        console.log(response.assets[0]);
        setRecipePicture(response.assets[0]);
      }
    });
  };

  const handlerUpdate = () => {
    let formData = new FormData();
    formData.append('title', inputData.title);
    formData.append('ingredients', inputData.ingredients);
    formData.append('category_id', value);

    if (recipePicture) {
      formData.append('image', {
        uri: recipePicture?.uri,
        name: recipePicture?.fileName,
        type: recipePicture?.type,
      });
    }

    console.log('ini form data', formData);

    dispatch(updateMenu(itemId, formData, {navigation}));
  };

  const onChangeInput = (name, value) => {
    setInputData({...inputData, [name]: value});
  };

  return (
    <>
      <View style={[GlobalStyle.container, {paddingTop: 16}]}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <View style={{marginTop: 24, alignItems: 'center'}}>
          <Text
            style={{
              color: GlobalStyle.colors.font_primary,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Update Your Recipe
          </Text>
        </View>

        <View style={{marginTop: 24}}>
          <View style={styles.search__wrapper}>
            <Icon
              style={{paddingHorizontal: 8}}
              name="book-open"
              size={24}
              color={GlobalStyle.colors.font_secondary}
            />
            <TextInput
              placeholder="Title"
              onChangeText={value => onChangeInput('title', value)}
              value={inputData?.title}
              placeholderTextColor={GlobalStyle.colors.font_secondary}
              style={{color: GlobalStyle.colors.font_primary, width: '100%'}}
            />
          </View>
        </View>

        <View style={[styles.search__wrapper, {marginTop: 16}]}>
          <Icon
            style={{paddingHorizontal: 8}}
            name="book"
            size={24}
            color={GlobalStyle.colors.font_secondary}
          />
          <TextInput
            multiline
            numberOfLines={6}
            placeholder="Ingredients"
            onChangeText={value => onChangeInput('ingredients', value)}
            value={inputData?.ingredients}
            placeholderTextColor={{color: 'gray'}}
            style={{color: GlobalStyle.colors.font_primary, width: '100%'}}
          />
        </View>

        <View style={{marginTop: 16}}>
          <TouchableOpacity
            style={[
              styles.buttonStyleImage,
              {flexDirection: 'row', alignItems: 'center'},
            ]}
            onPress={() => galleryLaunch()}>
            <Icon
              style={{paddingHorizontal: 8}}
              name="image"
              size={24}
              color={GlobalStyle.colors.font_secondary}
            />
            <Text
              style={{
                color: 'gray',
                fontSize: 14,
                paddingStart: 6,
              }}>
              Update Image
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 16}}>
          <DropDownPicker
            style={{
              backgroundColor: GlobalStyle.colors.bg_third,
              width: '100%',
              borderWidth: 0,
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            height: 180,
            width: '100%',
            backgroundColor: GlobalStyle.colors.bg_third,
            borderRadius: 10,
          }}>
          {recipePicture && (
            <Image
              resizeMode="cover"
              style={{height: '100%', width: '100%', borderRadius: 10}}
              source={{uri: recipePicture.uri}}
            />
          )}
          {!recipePicture && inputData.image && (
            <Image
              resizeMode="cover"
              style={{height: '100%', width: '100%', borderRadius: 10}}
              source={{uri: inputData.image}}
            />
          )}
        </View>
        <Text style={{color: 'red', fontSize: 12}}>
          * harap mengisi semua field yang ada
        </Text>
        <View>
          <TouchableOpacity style={styles.buttonStyle} onPress={handlerUpdate}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}>
              UPDATE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default UpdateRecipe;

const styles = StyleSheet.create({
  search__wrapper: {
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: GlobalStyle.colors.bg_third,
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 16,
    backgroundColor: GlobalStyle.colors.font_primary,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonStyleImage: {
    backgroundColor: GlobalStyle.colors.bg_third,
    paddingVertical: 14,
    alignItems: 'flex-start',
    borderRadius: 8,
  },
});
