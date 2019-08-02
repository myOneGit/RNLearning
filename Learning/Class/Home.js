import React, {Component} from 'react';
import {View, Text, Button, Alert,TouchableOpacity} from 'react-native';

export default class Home extends Component <Props> {

    render() {
        return (
            <TouchableOpacity onPress={()=>alert('0000')} style={{flex: 1}}>
                <Text>Hi! My name is Home </Text>
                <Button title='pushLogin'/>
                <ButtonClick onppp={() => this.props.navigation.push('Login')}/>
            </TouchableOpacity>
        )
    }
}
const ButtonClick = (pp) => {
    return (
        <Text onPress={pp.onppp}>
            12222
        </Text>)

};