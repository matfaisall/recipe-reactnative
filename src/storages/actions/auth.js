import axios from 'axios';
import config from '../../config';
import {Alert, TouchableNativeFeedbackComponent} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = `https://alive-overshirt-bear.cyclic.app`;

export const login =
  (form, {navigation}) =>
  async dispatch => {
    console.log(form);
    try {
      dispatch({
        type: 'AUTH_LOGIN_PENDING',
      });
      console.log('1. auth login pending');
      const result = await axios.post(baseURL + `/auth/login`, form);
      console.log('ini token', result.data.data.token);

      // pasangin
      AsyncStorage.setItem('token', result.data.data.token);

      dispatch({
        type: 'AUTH_LOGIN_SUCCESS',
        payload: result.data,
      });
      navigation.navigate('MyTab');
    } catch (error) {
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: error.response.data.message,
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
      const result = await axios.post(baseURL + `/auth/register`, form);
      console.log('result register', result);

      dispatch({type: 'AUTH_REGISTER_SUCCESS', payload: result.data});

      navigation.navigate('Login');
    } catch (error) {
      dispatch({
        type: 'AUTH_REGISTER_FAILED',
        payload: error.response.data.message,
      });
      console.log(error);
    }
  };
