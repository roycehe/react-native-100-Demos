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

var WineList = React.createClass({
    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !==r2});
    return{
        //返回数据源
        dataSource:ds.cloneWithRows(Wine)
        }

    },
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}  // 数据源
                renderRow={this.renderRow}
            />
        );
    },

    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <View style={styles.cellStyle}>
               {/*左图*/}
               <Image source={{uri:rowData.image}} style={styles.imageStyle} ></Image>

                {/*右View*/}
                <View style={styles.rightStyle} >
                    <Text style={styles.nameStyle}>{rowData.name}</Text>
                    <Text style={styles.moneyStyle} >￥{rowData.money}</Text>

                </View>
            </View>


        );


    }




});

const styles= StyleSheet.create({
    cellStyle:{

        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',
        // padding:5,
        flexDirection:'row',
        height:100,
        // justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        height:60,
        width:60,

    },
    rightStyle:{
       marginLeft:10,
// justifyContent:'center',

    },

    nameStyle:{

        flexWrap:'wrap',
        // flex:1,
        width:width -70,
    },
    moneyStyle:{

        color:'red',
        marginTop:10

    }



});

module.exports = WineList;