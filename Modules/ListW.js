/**
 * Created by hexiaowen on 2017/3/1.
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
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

// 导入json数据
var Wine = require('./Wine.json'); // 数组

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var GListViewDemo = React.createClass({
    // 设置初始值
    getInitialState(){
        // 1.1 设置数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 1.2 设置返回数据
        return{
            dataSource: ds.cloneWithRows(Wine)  // cloneWithRows 放置数组
        }
    },

    // 设置render函数
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}  // 数据源
                renderRow={this.renderRow}
            />
        );
    },

    // 返回具体的cell
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了'+rowID+'行')}}>
                <View style={styles.cellViewStyle}>
                    {/*左边的图片*/}
                    <Image source={{uri: rowData.image}} style={styles.leftImageStyle}/>
                    {/*右边的View*/}
                    <View style={styles.rightViewStyle}>
                        {/*上边的Text*/}
                        <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                        {/*下边的Text*/}
                        <Text style={styles.bottomTitleStyle}>¥{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

});

const styles = StyleSheet.create({
    cellViewStyle:{
        padding:10,
        backgroundColor:'white',
        // 下划线
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',

        // 确定主轴的方向
        flexDirection:'row'
    },

    leftImageStyle:{
        width:60,
        height:60,
        marginRight:15
    },

    rightViewStyle:{
        // 主轴的对齐方式
        justifyContent:'center'
    },

    topTitleStyle:{
        color:'red',
        fontSize:15,
        width:width * 0.7,
        marginBottom:8
    },

    bottomTitleStyle:{
        color:'blue',
    }
});
module.exports = GListViewDemo;
