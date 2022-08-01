import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScene extends Component {
    static defaultProps = {
        title: 'HomeScene'
    };

    render() {
        const { route, navigation } = this.props;
        // const { } = route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Set Authentication to Proceed</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => {
                        navigation.navigate('Settings', {});
                    }}
                />
            </View>
        )
    }
}