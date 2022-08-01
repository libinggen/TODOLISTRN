import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScene from './src/pages/main/HomeScene'
import SettingsScene from './src/pages/setting/SettingsScene'
import ChooseScreenLockScene from './src/pages/screenlock/ChooseScreenLockScene'
import SecureStartUpScene from './src/pages/screenlock/SecureStartUpScene'
import ChoosePINScene from './src/pages/screenlock/ChoosePINScene'
import NotificationsScene from './src/pages/notification/NotificationsScene'
import AuthenticateScene from './src/pages/authenticate/AuthenticateScene'
import TodoListScene from './src/pages/todo/TodoListScene'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScene} />
        <Stack.Screen name="Settings" component={SettingsScene} />
        <Stack.Screen name="ChooseScreenLock" component={ChooseScreenLockScene} />
        <Stack.Screen name="SecureStartUp" component={SecureStartUpScene} />
        <Stack.Screen name="ChoosePIN" component={ChoosePINScene} />
        <Stack.Screen name="Notifications" component={NotificationsScene} />
        <Stack.Screen name="Authenticate" component={AuthenticateScene} />
        <Stack.Screen name="TodoList" component={TodoListScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
