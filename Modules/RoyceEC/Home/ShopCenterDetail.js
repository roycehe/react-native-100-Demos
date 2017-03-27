/**
 * Created by hexiaowen on 2017/3/19.
 */
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
    Image,
    TouchableOpacity,
    WebView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var ShopDetail = React.createClass({
    getInitialState(){
        return{
            url:''
        }

    },
    getDefaultProps(){


    },

    render() {
        return (

                <View style={styles.container}>
                    <WebView
                        style={{width:width,height:height-20,backgroundColor:'gray'}}
                        source={{uri:'http://es6.ruanyifeng.com/'}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        scalesPageToFit={false}
                    />
                </View>


        );
    },
    componentDidMount(){

        this.setState({
            url: this.props.Durl
        })

    }


});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',

    },
    textStyle:{


    }


});

// 输出组件类
module.exports = ShopDetail;
