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


var Shop = React.createClass({

    render(){
        return (
            <View style={styles.container}>
                <Text>商店</Text>
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

module.exports = Shop;