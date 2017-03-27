/**
 * Created by hexiaowen on 2017/3/18.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
// 导入外部的json数据
var Home_D4 = require('../LocalData/XMG_Home_D4.json');
var Event = require('./EventCommonView');
var EventBottomView = React.createClass({
    //外数据
    getDefaultProps(){


    },

    render(){
        return(
            <View style={styles.containerStyle}>
                <View>
                    <Text>12</Text>
                </View>

                {/*下部*/}
            <View style={styles.bottomStyle}>
                {this._renderItems()}
            </View>

            </View>


        );

    },
    _renderItems(){
        let items = [];
        let dataArr = Home_D4.data;

        for(var i = 0; i < dataArr.length; i++){

            let data = dataArr[i];
            items.push(
                <Event
                    key={i}
                title={data.maintitle}
                subTitle={data.title}
                titleColor={data.typeface_color}
                rightIcon={this._dealWithImgUrl(data.imageurl)}
                tpUrl={data.tplurl}

                />

            );

        }
        return items;

    },
    // 处理图像的尺寸
    _dealWithImgUrl(url){

        if (url.search('w.h') == -1){ // 没有找到,正常返回
            return url;
        }else{
            return url.replace('w.h', '120.90');

        }
    }





});
const styles = StyleSheet.create({
    containerStyle:{
        marginTop:15,
        width:width,
        backgroundColor:'white',

    },
    bottomStyle:{
        flexDirection:'row',
        flexWrap:'wrap',

    },





});
module.exports = EventBottomView;
