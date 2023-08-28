import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import {StyleSheet, Text, View} from 'react-native';
import GlobalStyle from './src/assets/styles/style';
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
} from './src/screens';
// import Home from './src/screens/Home';
// import SearchRecipe from './src/screens/Search';
// import DetailPopularRecipe from './src/screens/DetailPopularRecipe';

import {fonts} from './src/assets/fonts';

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // tabBarLabel: false,
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
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

const styles = StyleSheet.create({});

export default App;
