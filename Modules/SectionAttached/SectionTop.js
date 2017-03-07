/**
 * Created by hexiaowen on 2017/3/4.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

var Cars = require('./Car.json');


var SectionHeader = React.createClass({
    getInitialState(){
        var getSectionData = (databBlob, sectionID) => {
            return databBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };
        return{

            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged:(r1, r2) => r1 !== r2,
                sectionHeaderHasChanged:(s1, s2) => s1 !== s2

            })


        }
    },
    componentDidMount(){
        this.loadDataFromJson();

    },
    loadDataFromJson(){
        var jsonData = Cars.data;
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            carsArr = [];
    //    遍历
        for (var i=0; i<jsonData.length; i++){
            //组号装入数组
            sectionIDs.push(i);
        //    租内容转入数组
            dataBlob[i] = jsonData[i].title;
        //    取所有car
            carsArr = jsonData[i].cars;
            rowIDs[i] = [];

            for (var j=0; j<carsArr.length; j++){
            //    装行号
                rowIDs[i].push(j);
                dataBlob[i + ':' + j] = carsArr[j];
                console.log(dataBlob);
            }

        }

    //    更新状态
        this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        })
    },
    render(){
        return(
            <ListView
                style={styles.listViewStyle}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
            ></ListView>

        );


    },
    renderRow(rowData, sectionID, rowID){
    // console.log(rowData);
        return(
            <View style={styles.cellViewStyle} >
                {/*左图*/}

                <Image style={styles.imgStyle} source={require('./images/m_2_100.png')} ></Image>

                <Text style={styles.titleStyle} >0000{rowData.title}</Text>
            </View>


        );



    },
    renderSectionHeader(sectionData, sectionID){
        console.log(sectionData);
        return(
            <View style={styles.sectionHeaderStyle}>
                <Text style={{marginLeft:10, justifyContent:'center',backgroundColor:'#e8e8e8'}} >
                    {sectionData.title}
                </Text>
            </View>

        );


    }




});

var  styles = StyleSheet.create({


    // listViewStyle: {
    //     flex:1
    //
    // },
    cellViewStyle: {
        padding:10,
        flexDirection:'row',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        alignSelf:'center'

    },
    imageStyle:{
    height:60,
        width:60,
        marginLeft:10

    },
    titleStyle:{
        marginLeft:10,

    },
    sectionHeaderStyle:{
        height:20,

    }




});


module.exports = SectionHeader;