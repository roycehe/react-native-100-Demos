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
    Image

} from 'react-native';
import Geolocation from 'Geolocation';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default  class Sample extends Component{

    constructor(props){
        super(props);
        this.state = {

        };
    };

    render(){

        return(
            <View style={styles.containerStyle}>

            </View>


        );



    };

}
const styles = StyleSheet.create({

    containerStyle:{
        flex:1,

    },
    text:{


    }



});

// 输出组件类
module.exports = Sample;
