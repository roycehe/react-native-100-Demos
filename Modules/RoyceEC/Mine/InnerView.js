/**
 * Created by hexiaowen on 2017/3/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var  InnerView = React.createClass({

    getDefaultProps(){
        return{
            _iconName:'',
            _title : ''
        }

    },
    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('0')}}>
                <View style={styles.innerViewStyle}>
                    <Image source={{uri: this.props._iconName}} style={{width:40, height:30, marginBottom:3}}/>
                    <Text style={{color:'gray'}}>{this.props._title}</Text>
                </View>
            </TouchableOpacity>

        );
        alert(this.props._iconName);
    },



});
const styles = StyleSheet.create({


    innerViewStyle:{
        width:70,
        height:70,

        // 水平和垂直居中
        justifyContent:'center',
        alignItems:'center'
    }

});
module.exports = InnerView;