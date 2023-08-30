import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import {StyleSheet, Text, View} from 'react-native';
import GlobalStyle from '../assets/styles/style';
import Icon from 'react-native-vector-icons/Feather';

import {
  Register,
  Login,
  Home,
  SearchRecipe,
  DetailPopularRecipe,
  AddRecipe,
  Chat,
  Profile,
  MyRecipe,
  DetailIngredients,
} from '../screens';

const MyTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <Icon name="home" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Add Recipe"
        component={AddRecipe}
        options={{
          tabBarIcon: () => {
            return <Icon name="plus-square" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: () => {
            return <Icon name="message-circle" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <Icon name="user" size={24} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTab"
          component={MyTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="My Recipe"
          component={MyRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SearchRecipe" component={SearchRecipe} />
        <Stack.Screen
          name="DetailIngredients"
          component={DetailIngredients}
          options={{
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: '#EFC81A',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
