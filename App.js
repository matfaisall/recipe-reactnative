import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyle from './src/assets/styles/style';

// import Login from './src/screens/auth/Login';
// import Register from './src/screens/auth/Register';
import Home from './src/screens/Home';
import {fonts} from './src/assets/fonts';

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: 'white',
//     flex: 1,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     color: 'chocolate',
//     fontFamily: fonts.primary.medium,
//   },
//   highlight: {
//     fontWeight: '700',
//     color: 'gray',
//   },
// });

export default App;
