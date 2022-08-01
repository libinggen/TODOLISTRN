import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export default class ChoosePINScene extends Component {
    static defaultProps = {
        title: 'ChoosePINScene'
    };

    constructor(props) {
        super(props);
        this.state = {
            pinPassWord: '',
            prePinPassWord: '',
            isConfirmStep: false
        }
    }

    render() {
        const { route, navigation } = this.props;
        // const {  } = route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Choose your PIN</Text>
                {this.state.isConfirmStep ? <Text>Confirm your PIN</Text> : <Text>PIN must be at least 4 digits</Text>}
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
                    onSubmitEditing = {(event)=>this.submitPinPassWord()} />
            </View>
        );
    }

    getPinPassWord(text) {
        this.setState({
            pinPassWord: text
        })
    }

    submitPinPassWord() {
        if (!this.state.isConfirmStep) {
            this.setState({
                prePinPassWord: this.state.pinPassWord,
                pinPassWord:'',
                isConfirmStep: true
            })
            return;
        }

        if (this.state.pinPassWord == this.state.prePinPassWord) {
            this.setState({
                pinPassWord: ''
            })
            const { route, navigation } = this.props;
            navigation.navigate('Notifications', {
                prePinPassWord: this.state.prePinPassWord,
            })
        }
    }
}