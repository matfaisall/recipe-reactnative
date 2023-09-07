import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

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
  UpdateRecipe,
} from '../screens';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {
  NotificationServices,
  requestUserPermission,
} from '../utils/PushNotification';

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
  // for fcm token
  useEffect(() => {
    requestUserPermission();
    NotificationServices();
  }, []);

  // const isLogin = useSelector(state => state.loginReducer);
  return (
    <NavigationContainer initialRouteName={Register}>
      <Stack.Navigator>
        {/* {isLogin.data ? (
        ) : (
          )} */}

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MyRecipe"
          component={MyRecipe}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MyTab"
          component={MyTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SearchRecipe"
          component={SearchRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailPopularRecipe"
          component={DetailPopularRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdateRecipe"
          component={UpdateRecipe}
          options={{headerShown: false}}
        />
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
