import axios from 'axios';
import config from '../../config';
import {Alert, TouchableNativeFeedbackComponent} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {BASE_URL} from '@env';

export const login =
  (form, {navigation}) =>
  async dispatch => {
    try {
      dispatch({
        type: 'AUTH_LOGIN_PENDING',
      });
      const result = await axios.post(BASE_URL + `/auth/login`, form);
      // console.log('ini token', result.data.data.token);

      // pasangin
      AsyncStorage.setItem('token', result.data.data.token);

      dispatch({
        type: 'AUTH_LOGIN_SUCCESS',
        payload: result.data,
      });

      Toast.show({
        type: 'success',
        text1: result.data.message,
      });

      navigation.push('MyTab');
    } catch (error) {
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: error.response.data.message,
      });
      Toast.show({
        type: 'info',
        text1: error.response.data.message,
      });
      navigation.navigate('Login');
      console.log(error);
    }
  };

export const register =
  (form, {navigation}) =>
  async dispatch => {
    try {
      dispatch({type: 'AUTH_REGISTER_PENDING'});
      const result = await axios.post(BASE_URL + `/auth/register`, form);
      console.log('result register', result);

      dispatch({type: 'AUTH_REGISTER_SUCCESS', payload: result.data});
      Toast.show({
        type: 'success',
        text1: result.data.message,
      });
      navigation.navigate('Login');
    } catch (error) {
      dispatch({
        type: 'AUTH_REGISTER_FAILED',
        payload: error.response.data.message,
      });
      Toast.show({
        type: 'info',
        text1: error.response.data.message,
      });
      console.log(error);
    }
  };

export const logOut =
  ({navigation}) =>
  async dispatch => {
    try {
      dispatch({type: 'DELETE_TOKEN_PENDING'});
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await AsyncStorage.removeItem('token');
      }
      dispatch({type: 'DELETE_TOKEN_SUCCESS'});
      navigation.push('Login');
    } catch (error) {
      dispatch({type: 'DELETE_TOKEN_FAILED'});
    }
  };
