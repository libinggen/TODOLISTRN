import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


var radio_props = [
    { label: 'Show all notification content', value: 0 },
    { label: 'Hide sensitive notification content', value: 1 },
    { label: 'Don\'t show notifications at all', value: 2 }
];

export default class NotificationsScene extends Component {
    static defaultProps = {
        title: 'NotificationsScene'
    };

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    render() {
        const { route, navigation } = this.props;
        const { prePinPassWord } = route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>When your device is locked, how do you want notifications to show</Text>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => { this.setState({ value: value }) }}
                />
                <Button
                    title="DONE"
                    onPress={() =>
                        navigation.navigate('Authenticate', {
                            prePinPassWord: prePinPassWord,
                        })
                    }
                />
            </View>
        );
    }
}