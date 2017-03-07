/**
 * Created by hexiaowen on 2017/3/6.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

var Mine = React.createClass({

    getInitialState() {
        return {
            // selectedItem: 'home',

        };
    },
    render(){
        return(
            <View style={styles.mainStyle}>
                <Text>我的</Text>
            </View>


        );


    }



});
var styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        alignItems: 'center',
    },

});

module.exports = Mine;