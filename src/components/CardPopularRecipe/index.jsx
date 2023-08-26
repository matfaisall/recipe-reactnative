import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardPopularRecipe = ({data}) => {
  console.log('card', data);
  // console.log(props[0]);
  return <Text style={styles.text}></Text>;
};

export default CardPopularRecipe;

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});
