/**
 * Created by hexiaowen on 2017/3/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch,
    Platform
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default  class NaviBar extends Component{

    constructor(props){
        super(props);

            this._titleName='',
            this._rightIcon='',
            this._leftIcon=''

    };

    render(){

        return(
            <View style={styles.naviStyle}>
                <View style={styles.topViewStyle} />
                <View style={styles.bottomViewStyle}>
                   <Text style = {{color:'white', fontSize:17, fontWeight:'bold'}} > {this.props._titleName}</Text>
                   <Image source={{uri: this.props._rightIcon}} style={styles.rightImageStyle}/>
                   <Image source={{uri: this.props._leftIcon}} style={styles.leftImageStyle}/>
               </View>


            </View>


        );


    }


}
const styles = StyleSheet.create({

    naviStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',


    },
    topViewStyle:{
        height:20,
        backgroundColor:'rgba(255,96,0,1.0)',
    },
    bottomViewStyle:{
        height:44,
        backgroundColor:'rgba(255,96,0,1.0)',
        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'

    },
    rightImageStyle:{
        width:24,
        height:24,
        position:'absolute',
        right:15,
        bottom:10

    },
    leftImageStyle:{
        width:24,
        height:24,
        position:'absolute',
        left:15,
        bottom:10

    },


});

// 输出组件类
module.exports = NaviBar;