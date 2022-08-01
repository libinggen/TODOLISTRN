import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class SecureStartUpScene extends Component {
    static defaultProps = {
        title: 'SecureStartUpScene'
    };

    render() {
        const { route, navigation } = this.props;
        // const {  } = route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>SecureStartUp</Text>
                <Text>You can further protect this device</Text>
                <Button
                    title="Require PIN to start device"
                    onPress={() =>
                        navigation.navigate('ChoosePIN', {})
                    }
                />
                <Button title="No thanks" onPress={() => navigation.goBack()} />
            </View>
        );
    }
}