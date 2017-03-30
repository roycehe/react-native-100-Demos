/**
 * Created by hexiaowen on 2017/3/29.
 */
/**
 * Created by hexiaowen on 2017/3/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NetInfo,
    TouchableOpacity

} from 'react-native';
import Geolocation from 'Geolocation';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default  class Location extends Component{

    constructor(props){
        super(props);
        this.state = {
            longitude:0,
            latitude:0,
        };
    };

    render(){

        return(
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>{this.state.longitude}</Text>
                <Text style={styles.textStyle} >{this.state.longitude}</Text>
            </View>


        );



    };


    componentDidMount() {
        //成功时会调用geo_success回调，参数中包含最新的位置信息。
        // 支持的选项：timeout (ms), maximumAge (ms), enableHighAccuracy (bool)
        // Geolocation.getCurrentPosition(
        //     (position) => {
        //         var initialPosition = JSON.stringify(position);
        //         alert(initialPosition)
        //         this.setState({longitude:initialPosition.longitude, latitude:initialPosition.latitude});
        //     },
        //     //错误回调
        //     (error) => {alert(error.message)},
        //     //设置精度等
        //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        //
        // );


    };





}
const styles = StyleSheet.create({

    containerStyle:{
        flex:1,
        alignItems:'center'



    },
    textStyle:{
        marginTop:50,

    }



});

// 输出组件类
module.exports = Location;