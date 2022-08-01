import React, { Component } from 'react';
import { Text, View, Button, TextInput, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

export default class TodoListScene extends Component {
    static defaultProps = {
        title: 'TodoListScene'
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedId: null,
            itemText: '',
            isUpdateStep: false,
            items: []
        }
    }

    render() {

        const { route, navigation } = this.props;
        const { items } = this.state;
        // const { } = route.params;

        const Item = ({ item, onPress, style }) => (
            <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
                <Text style={styles.text}>{item.text}</Text>
                <Button title="REMOVE" onPress={() => this.removeItem(item)} />
            </TouchableOpacity>
        );

        const renderItem = ({ item }) => {
            const backgroundColor = item.id === this.state.selectedId ? "#6e3b6e" : "white";
            return (
                <Item
                    item={item}
                    onPress={() => this.setState({ selectedId: item.id, itemText: item.text, isUpdateStep: true })}
                    style={{ backgroundColor }}
                />
            );
        };

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2' }}>
                <Text>TODO:</Text>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <TextInput
                    style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    returnKeyType='done'
                    value={this.state.itemText}
                    onChangeText={(text) => this.getItemText(text)}
                    onsubmitEditing={() => this.submitPinPassWord()} />
                {this.state.isUpdateStep ? <Button title="UPDATE" onPress={() => this.updateItem()} /> : <Button title="ADD" onPress={() => this.addItem()} />}
            </View>
        );
    }

    getItemText(text) {
        this.setState({
            itemText: text
        })
    }

    addItem() {
        const { items } = this.state;
        const newData = [...items];
        newData.push({
            id: this.state.itemText,
            text: this.state.itemText
        })
        this.setState({
            items: newData,
            itemText: ''
        })
    }

    updateItem() {
        const { items } = this.state;
        const newData = [...items];
        newData.map((pitem, index) => {
            if (pitem.id === this.state.selectedId) {
                pitem.id = this.state.itemText;
                pitem.text = this.state.itemText;
            }
        });
        this.setState({
            items: newData,
            isUpdateStep: false,
            itemText:''
        })
    }

    removeItem(item) {
        const { items } = this.state;
        const newData = [...items];
        newData.map((pitem, index) => {
            if (pitem.id === item.id) {
                newData.splice(index, 1);
            }
        });
        this.setState({
            items: newData
        })
    }

    submitPinPassWord() {
        if (!this.state.isConfirmStep) {
            this.setState({
                prePinPassWord: this.state.pinPassWord,
                isConfirmStep: true
            })
            return;
        }

        if (this.state.pinPassWord == this.state.prePinPassWord) {
            const { route, navigation } = this.props;
            navigation.navigate('Notifications', {
                itemId: Math.floor(Math.random() * 100),
            })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        minWidth: 300,
        justifyContent: 'space-between',

    },
    text: {
        fontSize: 20,
        minHeight: 80,
        // backgroundColor: 'red'
    },
});
