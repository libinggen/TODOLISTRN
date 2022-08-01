import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class SettingsScene extends Component {
    static defaultProps = {
        title: 'SettingsScene'
    };

    render() {
        const { route, navigation } = this.props;
        // const { } = route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Security</Text>
                <Text>Screen lock</Text>
                <Text>None</Text>
                <Text>Smart Lock</Text>
                <Button
                    title="To use, first set a screen lock"
                    onPress={() =>
                        navigation.push('ChooseScreenLock', {})
                    }
                />
            </View>
        );
    }
}