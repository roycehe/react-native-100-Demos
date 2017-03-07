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

var Discover = React.createClass({

    getInitialState() {
        return {
            // selectedItem: 'home',

        };
    },
    render(){
        return(
            <View style={styles.mainStyle}>
                <Text>消息</Text>
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

module.exports = Discover;