import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Perfil from './Perfil'

const Tab = createBottomTabNavigator()

export default function Tabs({ user, setUser }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {(props) => <Home {...props} user={user} />}
      </Tab.Screen>

      <Tab.Screen name="Perfil">
        {(props) => <Perfil {...props} user={user} setUser={setUser} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}