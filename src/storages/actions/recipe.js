import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = `https://alive-overshirt-bear.cyclic.app`;

import {BASE_URL} from '@env';

// ADDING MENU / RECIPE
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
    console.log('ini data add action: ', dataRecipe);
    try {
      dispatch({type: 'ADD_RECIPE_PENDING'});

      const result = await instance.post(baseURL + `/recipe`, dataRecipe);
      console.log('ini result recipe action', result);

      dispatch({
        type: 'ADD_RECIPE_SUCCESS',
        payload: result.data.data,
      });

      navigation.navigate('MyRecipe');
    } catch (error) {
      dispatch({
        type: 'ADD_RECIPE_FAILED',
        payload: error.response,
      });

      navigation.navigate('Add Recipe');
      console.log(error);
    }
  };

// GET MENU / RECIPE , belum guna
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

// === SEARCH MENU / RECIPE
export const searchMenu = (search, page) => async dispatch => {
  console.log('this is base url from env', BASE_URL);
  const token = await AsyncStorage.getItem('token');
  const instance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  try {
    dispatch({
      type: 'SEARCH_MENU_PENDING',
    });

    const result = await instance.get(
      BASE_URL +
        `/recipe/searchdata?search=${search}&searchBy=title&limit=5&page=${page}&sortBy=DESC`,
    );

    // console.log('ini action search', result);

    dispatch({
      type: 'SEARCH_MENU_SUCCESS',
      payload: result.data, // pass data if successs
    });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: 'SEARCH_MENU_FAILED',
      payload: error.response,
    });
  }
};

// GET MY MENU / RECIPE

export const getMyMenu = () => async dispatch => {
  const token = await AsyncStorage.getItem('token');
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });

  try {
    dispatch({
      type: 'GET_MYMENU_PENDING',
    });

    const result = await instance.get(
      baseURL + `/recipe/filterdata?sortBy=title&sort=desc&limit=100`,
    );

    dispatch({
      type: 'GET_MYMENU_SUCCESS',
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_MYMENU_FAILED',
      payload: error.response,
    });
  }
};

// DELETE MY MENU /RECIPE
export const deleteMenu = id => async dispatch => {
  const token = await AsyncStorage.getItem('token');
  const instance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      // baseURL: baseURL,
      'Content-Type': 'multipart/form-data',
    },
  });

  try {
    dispatch({
      type: 'DELETE_MYMENU_PENDING',
    });

    console.log('ini id delete', id);
    console.log('ini token delete', token);

    const result = await instance.delete(`${BASE_URL}/recipe/${id}`);
    console.log('result dari delete menu', result);
    dispatch(getMyMenu());

    dispatch({
      type: 'DELETE_MYMENU_SUCCESS',
      payload: result.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'DELETE_MYMENU_FAILED',
      payload: error.response,
    });
  }
};

// UPDATE MY MENU / RECIPE
export const updateMenu =
  (itemId, formData, {navigation}) =>
  async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const instance = axios.create({
      baseURL: baseURL,
      headers: {
        Authorization: `Bearer ${token} `,
      },
    });
    console.log('ini data action update: ', typeof itemId, formData);

    try {
      dispatch({
        type: 'UPDATE_MENU_PENDING',
      });

      // console.log('ini token yang katamu uncorrect', token);

      // console.log('ini item id action', itemId);

      const result = await instance.put(
        `${baseURL}/recipe/${itemId}`,
        formData,
      );

      dispatch({
        type: 'UPDATE_MENU_SUCCESS',
        payload: result.data,
      });
      navigation.navigate('MyRecipe');
    } catch (error) {
      dispatch({
        type: 'UPDATE_MENU_FAILED',
        payload: error.response.data,
      });

      console.log(error);
    }
  };

// MENU / RECIPE BY ID
export const menuById = itemId => async dispatch => {
  const token = await AsyncStorage.getItem('token');
  const instance = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${token} `,
    },
  });

  try {
    dispatch({
      type: 'GET_MENUBYID_PENDING',
    });

    const result = await instance.get(`${baseURL}/recipe/${itemId}`);
    dispatch({
      type: 'GET_MENUBYID_SUCCESS',
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_MENUBYID_FAILED',
      payload: error.response,
    });
    console.log(error);
  }
};
