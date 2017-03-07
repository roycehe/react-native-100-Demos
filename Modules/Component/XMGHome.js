/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入json数据
var LocalData = require('../LocalData.json');

// 导入外部的组件类
var ScrollImage = require('../Component/XMGScrollImage');
var NewsDetail = require('../Component/XMGNewsDetail');

var Home = React.createClass({
    getDefaultProps(){
       return {
          url_api: "http://c1.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&size=20&version=8.1&spever=false&net=wifi&lat=5OtqEKiivwW4K%2BGMt6DBdA%3D%3D&lon=jKlRVyYkSNti2wwsjGQHrw%3D%3D&ts=1463384311&sign=TtD7IZllDljVzBs2E4sa9fQyKTKF021w2EUC6qx1gEN48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore",
          key_word: 'T1348647853363'
       }
    },

    // 初始化方法
    getInitialState(){
        return {
            // ListView头部的数据源
            headerDataArr: [],

            // cell的数据源
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}
            />
        );
    },

    // 单独的一个cell
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.pushToNewsDetail(rowData)}}>
                <View style={styles.cellViewStyle}>
                    {/*左边*/}
                    <Image source={{uri:rowData.imgsrc}} style={styles.imgStyle}/>
                    {/*右边*/}
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.titleStyle}>{rowData.title}</Text>
                        <Text style={styles.subTitleStyle}>{rowData.digest}</Text>
                        <Text style={styles.flowTitleStyle}>{rowData.replyCount}跟帖</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    // 跳转到新闻详情页
    pushToNewsDetail(rowData){

        // alert(rowData.title);
        this.props.navigator.push({
            component: NewsDetail,
            title: rowData.title,
            passProps:{rowData}
        })
    },

    // 头部
    renderHeader(){
       // 判断
       if (this.state.headerDataArr.length == 0) return;
        
       return(
           <ScrollImage
               imageDataArr = {this.state.headerDataArr}
           />
       );
    },


    // 请求网络数据
    componentDidMount(){
        this.loadDataFromNet();
    },

    loadDataFromNet(){
        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                // 拿到所有的数据
                var jsonData = responseData[this.props.key_word];
                // 处理网络数据
                this.dealWithData(jsonData);
            })
            .catch((error)=>{
                if(error){
                    // 拿到所有的数据
                    var jsonData = LocalData[this.props.key_word];
                    // 特殊处理
                    this.dealWithData(jsonData)
                }
            })

    },

    // 处理网络数据
    dealWithData(jsonData){
        // 定义临时变量
        var headerArr = [], listDataArr = [];
        // 遍历拿到的json数据
        for(var i=0; i<jsonData.length; i++){
            // 取出单独的对象
            var data = jsonData[i];
            // 判断
            if(data.hasAD == 1){ // 取出广告数据
                headerArr = data.ads;
            }else{ // 剩余的行数据
                listDataArr.push(data);
            }
        }

        // 更新状态机
        this.setState({
            // ListView头部的数据源
            headerDataArr: headerArr,
            // cell的数据源
            dataSource: this.state.dataSource.cloneWithRows(listDataArr)
        });

        // console.log(headerArr, listDataArr);
    }

});

const styles = StyleSheet.create({
    cellViewStyle:{
       // 确定主轴的方向
       flexDirection:'row',
       // 设置侧轴的对齐方式
       // alignItems:'center',
       padding:10,
       // 设置下边框
       borderBottomColor:'#e8e8e8',
       borderBottomWidth:0.5

    },

    imgStyle:{
       width:90,
       height:90
    },

    rightViewStyle:{
      width: 260,
      marginLeft:8
    },

    titleStyle:{
       fontSize:16,
       marginBottom:5
    },

    subTitleStyle:{
       color:'gray'
    },

    flowTitleStyle:{
       // 绝对定位
       position:'absolute',
       right:10,
       bottom:0,

       // 边框
       borderWidth:0.5,
       borderColor:'gray',
       borderRadius:5,
       padding:3,

       color:'gray'
    }
});

// 输出类
module.exports = Home;
