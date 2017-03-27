/**
 * Created by hexiaowen on 2017/3/11.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');
let Header = require('./MineHeaderView');
let Menu = require('./MineMenuView');
var Mine = React.createClass({

    render(){
        return (
            <ScrollView style={styles.container}
            contentInset={{top:-200}}
            contentOffset={{y:200}}

            >
                <Header />
                <Menu />
            </ScrollView>

            )


    }

});

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#F5FCFF',

    },

});

module.exports = Mine;