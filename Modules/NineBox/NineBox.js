/**
 * Created by hexiaowen on 2017/3/2.
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
    AlertIOS

} from 'react-native';
let ShareData = require('./shareData.json');
let Dimensions = require('Dimensions');

//一些常量
let screen_w = Dimensions.get('window').width;
let col = 3;
let cell_width = 100;
let margin_cell = (screen_w - col * cell_width) / (col + 1);

var NineBox = React.createClass({

    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});

    return{
    dataSource:ds.cloneWithRows(ShareData.data)

    }
    },
    render(){
        return(
            <ListView dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listStyle}
            />
        );

    },
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity activeOpacity={0.3} onPress={() => AlertIOS.alert(rowData.title)}>
                <View style={styles.cellStyle} >
                    <Image style = {styles.imgStyle} source={{uri:rowData.icon}} />
                    <Text style={styles.titlesStyle}>{rowData.title}</Text>
                </View>

            </TouchableOpacity>

        );

    }








});

var styles = StyleSheet.create({
    listStyle:{
        width:screen_w,
        flexDirection:'row',
        flexWrap:'wrap',
        //由于在rn 0.28之后的版本上官方已经修改了flexWrap:'wrap'的工作方式了，之前版本的是flexWrap:'wrap'和默认的alignItems: 'stretch'是一起工作的；如果是0.28之后的版本，你需要加上alignItems: 'flex-start'
        alignItems: 'flex-start'

    },
    cellStyle:{

        marginLeft:margin_cell,
        marginTop:15,
        alignItems:'center',
        height:cell_width,
        width:cell_width




    },
    imgStyle:{
        height:80,
        width:80,

    },
    titlesStyle:{


    }




});

module.exports = NineBox;