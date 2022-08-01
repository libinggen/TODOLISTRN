import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class ChooseScreenLockScene extends Component {
    static defaultProps = {
        title: 'ChooseScreenLockScene'
    };

    render() {
        const { route, navigation } = this.props;
        // const { } = route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>None</Text>
                <Text>Current screen lock</Text>
                <Button
                    title="PIN"
                    onPress={() =>
                        navigation.navigate('SecureStartUp', {})
                    }
                />
            </View>
        );
    }
}