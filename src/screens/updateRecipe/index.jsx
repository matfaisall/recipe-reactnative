import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import GlobalStyle from '../../assets/styles/style';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'react-native-image-picker';
import {useRoute} from '@react-navigation/native';

import {menuById, updateMenu} from '../../storages/actions/recipe';
import {useDispatch, useSelector} from 'react-redux';

const UpdateRecipe = ({route, navigation}) => {
  const dispatch = useDispatch();

  const {itemId} = route.params;

  const data = useSelector(state => state.menuByIdReducer);
  const getRecipe = data.data.data;

  // const [title, setTitle] = useState('');
  // const [ingredients, setIngredients] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(getRecipe.category_id);
  const [items, setItems] = useState([
    {label: 'Main course', value: '1'},
    {label: 'Appetizer', value: '2'},
    {label: 'Dessert', value: '3'},
  ]);

  console.log('ini value', value);

  // console.log('ini menuById', menuById());
  // console.log('ini itemId: ', itemId);

  const [recipePicture, setRecipePicture] = useState(getRecipe.image);

  const [inputData, setInputData] = useState({
    title: '',
    ingredients: '',
    category_id: value,
    image_url: '',
  });

  // console.log('inputdata', inputData);
  // console.log('ini data', getRecipe);

  useEffect(() => {
    dispatch(menuById(itemId));
  }, []);

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

  useEffect(() => {
    getRecipe &&
      setInputData({
        ...inputData,
        title: getRecipe.title,
        ingredients: getRecipe.ingredients,
        image_url: getRecipe.image,
        category_id: getRecipe.category_id,
      });
  }, [getRecipe]);

  const handlerUpdate = () => {
    let formData = new FormData();
    formData.append('title', inputData.title);
    formData.append('ingredients', inputData.ingredients);
    formData.append('category_id', inputData.category_id);
    if (recipePicture) {
      formData.append('image', {
        uri: recipePicture?.uri,
        name: recipePicture?.fileName,
        type: recipePicture?.type,
      });
    }

    dispatch(updateMenu(itemId, formData, {navigation}));
  };

  const onChangeInput = (name, value) => {
    setInputData({...inputData, [name]: value});
  };

  useEffect(() => {
    if (getRecipe) {
      setInputData({
        title: getRecipe?.title,
        ingredients: getRecipe?.ingredients,
        category_id: getRecipe?.category_id,
        image_url: getRecipe?.image,
      });
    }
  }, [getRecipe]);

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

        <View style={{marginTop: 20}}>
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
