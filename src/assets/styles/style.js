import {StyleSheet} from 'react-native';
import {fonts} from '../fonts';

const GlobalStyle = StyleSheet.create({
  colors: {
    font_primary: '#EFC81A',
    font_secondary: '#C4C4C4',

    bg_primary: '#FFFFFF',
    bg_secondary: '#C4C4C4',
    bg_third: '#F5F5F5',
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
    fontFamily: fonts.primary.medium,
    backgroundColor: '#FFFFFF',
  },

  buttonPrimary: {
    marginVertical: 20,
    paddingVertical: 20,
    backgroundColor: '#EFC81A',
  },
});

export default GlobalStyle;
