import React from 'react';
import {
    createAppContainer,
    createStackNavigator,
    StackActions,
    NavigationActions
} from 'react-navigation';
import Login from './Login';
import Home from './Home';

const AppNavigator = createStackNavigator({

    Login: Login,
    Home:Home,

}, {
    initialRouteName: 'Login',

});

export default createAppContainer(AppNavigator);