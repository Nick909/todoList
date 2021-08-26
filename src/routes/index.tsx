import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { theme } from '../global/styles/styles';

import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentUpdate } from '../screens/AppointmentUpdate';
import { Home } from '../screens/Home';


const { Navigator, Screen } = createStackNavigator ();

export function AppRoutes () {
  return (
    <NavigationContainer>

      <Navigator
        screenOptions={{
          headerShown: false,
          // cardStyle:{
          //   backgroundColor: theme.colors.white,
          // }
        }}
      >

        <Screen 
          name='Home'
          component={Home}
        />

        <Screen 
          name='AppointmentDetails'
          component={AppointmentDetails}
        />

        <Screen 
          name='AppointmentUpdate'
          component={AppointmentUpdate}
        />


      </Navigator>
    </NavigationContainer>

  );
}