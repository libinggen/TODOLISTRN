import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export default class AuthenticateScene extends Component {
    static defaultProps = {
        title: 'AuthenticateScene'
    };

    constructor(props) {
        super(props);
        this.state = {
            pinPassWord: ''
        }
    }

    render() {
        const { route, navigation } = this.props;
        const { prePinPassWord } = route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Please authenticate</Text>
                <Text>Enter your device PIN to continue</Text>
                <Button title="CANCEL" onPress={() => navigation.popToTop()} />
                <TextInput
                    style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    textContentType="password"
                    keyboardType="numeric"
                    returnKeyType='done'
                    secureTextEntry={true}
                    placeholder=""
                    value={this.state.pinPassWord}
                    maxLength={4}
                    onChangeText={(text) => this.getPinPassWord(text)}
                    onSubmitEditing={(event) => this.submitPinPassWord()} />
            </View>
        );
    }

    getPinPassWord(text) {
        this.setState({
            pinPassWord: text
        })
    }

    submitPinPassWord() {
        const { route, navigation } = this.props;
        const { prePinPassWord } = route.params;

        if (this.state.pinPassWord == prePinPassWord) {
            this.setState({
                pinPassWord: ''
            })
            navigation.navigate('TodoList', {})
        }
    }
}