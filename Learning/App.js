/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Alert,
    TouchableHighlight,
} from 'react-native';
 import  Nacigation from './Class/APPNavigation'

export default class App extends Component<Props> {

    componentWillMount(): void {
    }

    componentDidMount(): void {

    }
    handleNavigationChange = (e) => {
        console.log(e);
    };

    render() {

        const navigation = this.props.navigation;
        return (

            <Nacigation onNavigationStateChange={this.handleNavigationChange}/>

        );
    }

}
const buttonClick = () => {
    Alert.alert('mmp');
    this.props.navigation.navigate('Login')

};
const styles = StyleSheet.create({
    loanContent: {
        flex: 1,

    },
});

