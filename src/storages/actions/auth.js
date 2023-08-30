import axios from 'axios';
import config from '../../config';
import {Alert, TouchableNativeFeedbackComponent} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = `https://alive-overshirt-bear.cyclic.app`;

export const login = form => async dispatch => {
  console.log(form);
  try {
    dispatch({
      type: 'AUTH_LOGIN_PENDING',
    });
    console.log('1. auth login pending');
    const result = await axios.post(baseURL + `/auth/login`, form);
    console.log('ini token', result.data.data.token);

    // pasangin async storage
    AsyncStorage.setItem('token', result.data.data.token);

    dispatch({
      type: 'AUTH_LOGIN_SUCCESS',
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: 'AUTH_LOGIN_FAILED',
      payload: error.response.data.message,
    });
    console.log(error);
  }
};
