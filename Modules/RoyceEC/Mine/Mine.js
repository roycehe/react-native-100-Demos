/**
 * Created by hexiaowen on 2017/3/11.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var Mine = React.createClass({

    render(){
        return (
            <View style={styles.container}>

            </View>

            )


    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:20,

    },

});

module.exports = Mine;