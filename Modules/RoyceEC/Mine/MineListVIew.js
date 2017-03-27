/**
 * Created by hexiaowen on 2017/3/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
let Data = require('./MiddleData.json');
let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');
let Cell = require('./MineCellView');
export default class MineListVIew extends Component{

    render(){
        <View style={styles.listStyle}>

        </View>

    }


}

const styles = StyleSheet.create(
    {
        listStyle:{


        }


    }

);
module.exports = MineListVIew;