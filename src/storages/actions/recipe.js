import axios from 'axios';
import config from '../../config';
import {Alert, TouchableNativeFeedbackComponent} from 'react-native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {instance} from '../../utils/apiServices';

// === get token
// let token = AsyncStorage.getItem('token');

// const headers = {
//   Authorization: `Bearer ${token}`,
// };
// === end get token

const baseURL = `https://alive-overshirt-bear.cyclic.app`;

export const addRecipe =
  (dataRecipe, {navigation}) =>
  async dispatch => {
    const token = await AsyncStorage.getItem('token');
    console.log('ini token action', token);
    console.log('ini data recipe', dataRecipe);

    const instance = axios.create({
      baseURL: baseURL,
      headers: {
        Authorization: `Bearer ${token} `,
        'Content-Type': 'multipart/form-data',
      },
    });
    try {
      dispatch({type: 'ADD_RECIPE_PENDING'});

      const result = await instance.post(baseURL + `/recipe`, dataRecipe);
      console.log('ini result recipe action', result);

      dispatch({
        type: 'ADD_RECIPE_SUCCESS',
        payload: result.data.data,
      });

      navigation.navigate('My Recipe');
    } catch (error) {
      dispatch({
        type: 'ADD_RECIPE_FAILED',
        payload: error.response,
      });
      navigation.navigate('Add Recipe');
      console.log(error);
    }
  };

export const getMenu = () => async dispatch => {
  const token = await AsyncStorage.getItem('token');
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });

  try {
    dispatch({
      type: 'GET_MENU_PENDING',
    });

    const result = await instance.get(baseURL + `/recipe`);

    dispatch({
      type: 'GET_MENU_SUCCESS',
      payload: result.data.data,
    });
    console.log('ini action', result.data);
  } catch (error) {
    dispatch({
      type: 'GET_RECIPE_FAILED',
      payload: error.response,
    });
    console.log(error.response);
  }
};

export const searchMenu = search => async dispatch => {
  const token = await AsyncStorage.getItem('token');
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });

  try {
    dispatch({
      type: 'GET_MENU_PENDING',
    });

    const result = await instance.get(
      baseURL +
        `/recipe/searchdata?search=${search}&searchBy=title&limit=5&sortBy=DESC`,
    );

    console.log('ini action search', result);

    dispatch({
      type: 'GET_MENU_SUCCESS',
      payload: result.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'GET_MENU_FAILED',
      payload: error.response,
    });
  }
};

// export const getMyRecipe =
//   (getMyDataRecipe, {navigation}) =>
//   async dispatch => {};
