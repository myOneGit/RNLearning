import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';

export default class Home extends Component <Props> {
    static navigationOptions = {
        headerTitle:'首页', //
    };
    render() {
        let data = this.props.state.params;//获取上个页面传值
            return (
            <View>
            <Text>Hi! My name is Home </Text>
           </View>
        )
    }

    pushLogin =()=>{
        this.props.navigation.push('Login')
    }
}
const ButtonClick = (pp) => {
    return (
        <Text onPress={pp.onppp}>
            12222
        </Text>)

};