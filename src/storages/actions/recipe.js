import axios from 'axios';
import config from '../../config';
import {Alert, TouchableNativeFeedbackComponent} from 'react-native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
