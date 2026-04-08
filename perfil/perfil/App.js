import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './Login'
import Tabs from './Tabs/Tabs'

const Stack = createNativeStackNavigator()

export default function App() {
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen name="Login">
            {(props) => <Login {...props} setUser={setUser} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Tabs">
            {(props) => <Tabs {...props} user={user} setUser={setUser} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}