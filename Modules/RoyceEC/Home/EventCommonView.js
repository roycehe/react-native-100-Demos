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
var EventCommonView = React.createClass({
    //外数据
    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            titleColor:'',
            rightIcon:'',
            callBackClickCell:null,
            tpUrl:''

        }

    },

    render(){
        return(
            <View style={styles.containerStyle}>

                <View>
                    <Text style={{fontSize:18,color:this.props.titleColor}} >{this.props.title}</Text>
                    <Text style={{color:'gray',fontSize:13}} >{this.props.subTitle}</Text>
                </View>
                <Image source={{uri:this.props.rightIcon}} style={styles.imageStyle} ></Image>

            </View>


        );

    },




});
const styles = StyleSheet.create({
    containerStyle:{
        width:width / 2,
        height:60,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'#d8d8d8',


    },
    imageStyle:{
        width:40,
        height:40,

    }


});
module.exports = EventCommonView;