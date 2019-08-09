import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';

export default class Home extends Component <Props> {
    static navigationOptions = {
        headerTitle:'首页', //
    };
    render() {

        let hhh = this.props.navigation.state.params.dataText;//获取上个页面传值
        alert('上一个传过来的：'+hhh); //字符串拼接 a+b = ab
            return (
            <View>
            <Text>{hhh} </Text>
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