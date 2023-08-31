import axios from 'axios';
import config from '../../config';
import {Alert, TouchableNativeFeedbackComponent} from 'react-native';

const baseURL = `https://alive-overshirt-bear.cyclic.app`;

export const addRecipe =
  (dataRecipe, header, {navigation}) =>
  async dispatch => {
    try {
      dispatch({type: 'ADD_RECIPE_PENDING'});

      const result = await axios.post(baseURL + `/recipe`, dataRecipe, {
        header,
      });
      console.log('ini result recipe action', result);

      dispatch({
        type: 'ADD_RECIPE_SUCCESS',
        payload: result.data.data,
      });
      navigation.navigate('MyTab');
    } catch (error) {
      dispatch({
        type: 'ADD_RECIPE_FAILED',
        payload: error.response,
      });
      navigation.navigate('Add Recipe');
      console.log(error);
    }
  };
