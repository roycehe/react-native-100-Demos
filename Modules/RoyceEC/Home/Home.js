/**
 * Created by hexiaowen on 2017/3/11.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var Home = React.createClass({

    render(){
        return(
            <View style={styles.container}>
                {this.renderNavi()}
            </View>
            )


    },
    renderNavi(){
        return(

            <View style={styles.navigatorStyle}>
                <View style={styles.statusStyle}></View>
                <View style={styles.naviStyle}>
                    <Text>杭州</Text>
                    <TextInput placeholder={'搜索条件'} style={styles.searchStyle}></TextInput>
                    <Image source={{uri:'icon_homepage_message.png'}} style={styles.iconStyle}/>
                    <Image source={{uri:'icon_homepage_scan.png'}} style={styles.iconStyle}/>
                </View>
            </View>

        );

    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // marginTop:20,
    },
    navigatorStyle:{

        width:width,
        height:64,
        marginTop:0,
        backgroundColor:'orange',
        alignItems: 'center',


    },
    statusStyle:{
        height:20,
        width:width,


    },
    naviStyle:{
        flexDirection:'row',
        alignItems:'center',
        height:44,
        width:width


    },
    searchStyle:{
        justifyContent:'space-around',
        width:0.68 * width,
        backgroundColor:'white',

        // 设置圆角
        borderRadius:17,

        // 内左边距
        paddingLeft:10,
        height:35,
        alignSelf:'center'


    },
    iconStyle:{
        height:28,
        width:28,

    }


});

module.exports = Home;