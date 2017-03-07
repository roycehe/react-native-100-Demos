/**
 * Created by hexiaowen on 2017/3/6.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Image
} from 'react-native';

var Home = React.createClass({

    getInitialState() {
        return {
            selectedItem: 'home',

        };
    },
    render(){
        return(
            <View style={styles.mainStyle}>
                <Text>首页</Text>
            </View>


        );


    }



});
var styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
      justifyContent:'center'
    },

});

module.exports = Home;