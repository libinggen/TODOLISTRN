
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);



import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScene from './src/pages/main/HomeScene'
import SettingsScene from './src/pages/setting/SettingsScene'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScene} />
        <Stack.Screen name="Settings" component={SettingsScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScene extends Component {
    static defaultProps = {
        title: 'HomeScene'
    };

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Set Authentication to Proceed</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => {
                        navigation.navigate('Settings', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
            </View>
        )
    }
}


import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class SettingsScene extends Component {
    static defaultProps = {
        title: 'SettingsScene'
    };

    render() {
        const { route, navigation } = this.props;
        const { itemId, otherParam } = route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        navigation.push('Settings', {
                            itemId: Math.floor(Math.random() * 100),
                        })
                    }
                />
                <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                <Button title="Go back" onPress={() => navigation.goBack()} />
                <Button
                    title="Go back to first screen in stack"
                    onPress={() => navigation.popToTop()}
                />
            </View>
        );
    }
}