/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// let Listwine = require('./ListView/ListWine');
// let Loginview = require('./Login/LoginView');
// let  NineBox = require('./NineBox/NineBox');
// let SectionHeader = require('./SectionAttached/SectionTop');
// let NetEase = require('./NetEase/Tabar');
// let Main = require('./Component/XMGMain');
// let Shop = require('./RoyceEC/Main/Main');
// let NetRequset = require('./NetRequest/NetRequest');
// let Gesture = require('./11-Gesture/Gesture');
let Dog = require('./13-23DogVideo/DTabBar');

export default class Modules extends Component {

    render() {
        return ( 
          <View style = { styles.container } >
            <Dog />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // marginTop:20,

    },

});

AppRegistry.registerComponent('Modules', () => Modules);