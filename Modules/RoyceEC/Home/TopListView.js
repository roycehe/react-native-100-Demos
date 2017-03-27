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

//全局变量
let cols = 5;
let cellW = Platform.OS == "ios" ? 60 : 60;
let cellH = 70;
let vMargin = (width - cols*cellW) / (cols + 1);

var TopListView = React.createClass({
        //外数据
        getDefaultProps(){
            return{

                dataArr:[]
            }

        },
        //数据源
    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        return{

            dataSource:ds.cloneWithRows(this.props.dataArr)

        }

    },
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                contentContainerStyle={styles.listContentStyle}
                scrollEnabled={false}
            />


        );

    },
    _renderRow(rowData){

        return(
            <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.cellStyle}>
                    <Image source={{uri:rowData.image}} style={{width:45, height:45}}/>
                    <Text style={{fontSize:12}} >{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );


    },


});
const styles = StyleSheet.create({
    listContentStyle:{
       width:width,
        flexDirection:'row',
        flexWrap:'wrap',
        //由于在rn 0.28之后的版本上官方已经修改了flexWrap:'wrap'的工作方式了，之前版本的是flexWrap:'wrap'和默认的alignItems: 'stretch'是一起工作的；如果是0.28之后的版本，你需要加上alignItems: 'flex-start'
        alignItems: 'flex-start',
        // height:200,

    },
    cellStyle:{
        width:cellW,
        height:cellH,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:vMargin,
        marginTop:10,

    },


});
module.exports = TopListView;