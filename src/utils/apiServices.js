import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let baseUrl = `https://alive-overshirt-bear.cyclic.app`;

let token = AsyncStorage.getItem('token');
console.log(token);

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export {instance};
