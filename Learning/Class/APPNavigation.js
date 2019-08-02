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
    Login: {
        screen: Login,
    },
    Home:{
       screen:Home
    },

}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);