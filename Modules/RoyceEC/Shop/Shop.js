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
let NaviBar = require('../Common/NaviBar');
// let Limit = require('./LimitBuyView');
var Shop = React.createClass({

    render(){
        return (
            <View style={styles.container}>
                <NaviBar
                    _titleName = '商家'
                    _rightIcon = 'icon_shop_search'
                    _leftIcon = 'icon_shop_local'

                />
                {/*<Limit />*/}
            </View>
            )


    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});

module.exports = Shop;