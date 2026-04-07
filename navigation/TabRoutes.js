import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import Config from '../screens/Config';

const Tab = createBottomTabNavigator();

export default function TabRoutes({ route }) {
  const { user } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: user === 'caio' ? '#6C63FF' : '#00C853'
        },
        headerTintColor: '#fff'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ user }}
        options={{ title: `Bem-vindo ${user}` }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ user }}
      />
      <Tab.Screen
        name="Configurações"
        component={Config}
      />
    </Tab.Navigator>
  );
}
