import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreenComponent from './components/MainScreenComponent'
import TourLocationsComponent from './components/TourLocationsComponent'
import SignupComponent from './components/SignupComponent'
import LoginComponent from './components/LoginComponent'


export const SimpleApp = StackNavigator({
    Home: {
        screen: MainScreenComponent
    },
    Second: {
        screen: TourLocationsComponent
    },
    Third: {
        screen: SignupComponent
    },
    Fourth: {
        screen: LoginComponent
    },
    
});

export default class App extends Component {
    render() {
        return (
            <SimpleApp/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});