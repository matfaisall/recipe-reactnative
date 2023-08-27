import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import GlobalStyle from '../../assets/styles/style';

import Icon from 'react-native-vector-icons/Feather';

import DropDownPicker from 'react-native-dropdown-picker';
import {launchImageLibrary} from 'react-native-image-picker';

const AddRecipe = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Main', value: '1'},
    {label: 'Appetizer', value: '2'},
    {label: 'Dessert', value: '3'},
  ]);

  const [recipePicture, setRecipePicture] = useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      console.log(response);
      if (response) {
        setRecipePicture(response);
      }
    });
  };

  return (
    <View style={[GlobalStyle.container, {paddingTop: 16, flex: 1}]}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={{marginTop: 24, alignItems: 'center'}}>
        <Text
          style={{
            color: GlobalStyle.colors.font_primary,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          Add Your Recipe
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
            placeholderTextColor={GlobalStyle.colors.font_secondary}
            style={{color: GlobalStyle.colors.font_primary, width: '100%'}}
          />
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
            placeholderTextColor={GlobalStyle.colors.font_secondary}
            style={{color: GlobalStyle.colors.font_primary, width: '100%'}}
          />
        </View>

        <View style={{marginTop: 16}}>
          <TouchableOpacity
            style={styles.buttonStyleImage}
            onPress={handleChoosePhoto}>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                paddingStart: 10,
              }}>
              Add Image
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
          <TouchableOpacity style={styles.buttonStyle}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}>
              POST
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddRecipe;

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
    paddingVertical: 16,
    alignItems: 'flex-start',
    borderRadius: 8,
  },
});
