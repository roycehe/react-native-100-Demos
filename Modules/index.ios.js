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
import Baby from './13-23BabyShow/App.js';

// let Listwine = require('./ListView/ListWine');
// let Loginview = require('./Login/LoginView');
// let  NineBox = require('./NineBox/NineBox');
// let SectionHeader = require('./SectionAttached/SectionTop');
// let NetEase = require('./NetEase/Tabar');
// let Main = require('./Component/XMGMain');
// let Shop = require('./RoyceEC/Main/Main');
// let NetRequset = require('./NetRequest/NetRequest');
// let Gesture = require('./11-Gesture/Gesture');

// let RNFS = require('./react-native-fs/fs.js');
// let Navigator = require('./React Navigation/Navigation.js');
export default class Modules extends Component {

    render() {
        return ( 
          <View style = { styles.container } >

              <Baby />
            
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