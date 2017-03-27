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
var Event = require('./EventCommonView');
var TopMiddleData = require('../LocalData/HomeTopMiddleLeft.json');

var EventView = React.createClass({
    //外数据
    getDefaultProps(){
        return{

        }

    },

    render(){
        return(
        //   左边
        <View style={styles.topEventStyle} >
            {this._renderLeftEvent()}
            <View>
                {this._renderRightEvent()}
            </View>

        </View>



        );

    },
    _renderLeftEvent(){
        var data = TopMiddleData.dataLeft[0];
        return(

            <View style={styles.leftStyle}>
                <Image source={{uri:data.img1}} style={styles.imageLeftStyle} ></Image>

                <Image source={{uri:data.img2}} style={styles.imageLeftStyle} ></Image>
                <Text tyle={{marginTop:5}} >{data.title}</Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <Text>{data.price}</Text>
                    <Text>{data.sale}</Text>
                </View>

            </View>
        );

    },
    _renderRightEvent(){
        var data = TopMiddleData.dataRight;
        var events = [];

            for(var i = 0; i < data.length; i++) {
                let eventData = data[i];

                events.push(
                    <Event
                        key={i}
                        title={eventData.title}
                        subTitle={eventData.subTitle}
                        rightIcon={eventData.rightImage}
                        titleColor={eventData.titleColor}
                    />
                );
            }
            // console.log(events);
        return events;

    }



});
const styles = StyleSheet.create({
    topEventStyle:{
        marginTop:15,
        backgroundColor:'white',
        flexDirection:'row',
        height:120,


    },
    leftStyle:{
        width:width /2  - 1,
        height:120,
        borderRightWidth:0.5,
        borderRightColor:'#d8d8d8',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#d8d8d8',
        borderBottomWidth:0.5,




    },

    imageLeftStyle:{
        width:120,
        height:30,
        resizeMode:'contain'

    }


});
module.exports = EventView;
