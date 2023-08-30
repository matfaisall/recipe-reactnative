import axios from 'axios';
import React, {useEffect, useState} from 'react';
import GlobalStyle from '../../assets/styles/style';

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import AuthPhoto from '../../assets/images/AuthPhoto.png';
import {useDispatch} from 'react-redux';
import {login} from '../../storages/actions/auth';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  console.log(form);

  const handleLogin = () => {
    dispatch(login(form));
  };

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View>
          <Image source={AuthPhoto} style={styles.image} />
        </View>
        <View style={GlobalStyle.container}>
          <View style={styles.wrapper__title}>
            <Text style={styles.title}>Welcome !</Text>
            <Text style={styles.sub__title}>
              Log in to your exiting account.
            </Text>
          </View>

          <View style={styles.inputFormWrapper}>
            <Text style={{paddingHorizontal: 8}}>
              <Icon
                name="user"
                size={24}
                color={GlobalStyle.colors.font_primary}
              />
            </Text>
            <TextInput
              style={styles.inputForm}
              placeholder="Enter your email"
              onChangeText={value => setForm({...form, email: value})}
              placeholderTextColor={GlobalStyle.colors.font_secondary}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputFormWrapper}>
            <Text style={{paddingHorizontal: 8}}>
              <Icon
                name="lock"
                size={24}
                color={GlobalStyle.colors.font_primary}
              />
            </Text>
            <TextInput
              style={styles.inputForm}
              placeholder="Enter your password"
              onChangeText={value => setForm({...form, password: value})}
              placeholderTextColor={GlobalStyle.colors.font_secondary}
              keyboardType="visible-password"
            />
          </View>

          <TouchableOpacity style={{alignItems: 'flex-end'}}>
            <Text style={styles.sub__title}>Forget Password</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.sub__title}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text
                style={{color: GlobalStyle.colors.font_primary}}
                onPress={() => navigation.navigate('Register')}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 260,
    shadowColor: 'red',
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowOpacity: 0.8,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  wrapper__title: {
    alignItems: 'center',
    marginVertical: 24,
  },

  title: {
    fontSize: 24,
    color: GlobalStyle.colors.font_primary,
  },
  sub__title: {
    fontSize: 14,
    color: GlobalStyle.colors.font_secondary,
  },
  inputFormWrapper: {
    backgroundColor: GlobalStyle.colors.bg_third,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  inputForm: {
    width: '100%',
    color: GlobalStyle.colors.font_primary,
  },

  buttonStyle: {
    marginVertical: 16,
    backgroundColor: GlobalStyle.colors.font_primary,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
});
