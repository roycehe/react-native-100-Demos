/**
 * Created by hexiaowen on 2017/3/6.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';

var Carousel = require('./ScrollImage');
var LocalData = require('./LocalData.json');
let Dimensions = require('Dimensions');
let screen_w = Dimensions.get('window').width;
let DetailPage = require('./DetailPage');
var Home = React.createClass({
    getDefaultProps(){
        return{
            url_api:"http://api.iclient.ifeng.com/ClientNews?id=SYLB10,SYDT10,SYRECOMMEND&action%E2%80%A6creen=750x1334&publishid=4002"


        }


    },
    getInitialState() {

        return {
            adsArr:[],
            dataSource:new  ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2}),


        }
    },
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}
            />


        );


    },

    renderRow(rowData,sectionID,rowID,highlightRow){
        console.log(rowData.img);

        return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=> this.pushToDetail(rowData)}>
            <View style={styles.cellStyle} >
                <Image style={styles.imageStyle} source={{uri:rowData.img}}></Image>
                <View style={styles.contentViewStyle}>
                    <Text style={styles.contentStyle} >{rowData.title}</Text>
                    <Text style={styles.subStyle}>{rowData.digest}</Text>
                    <Text style={styles.replyStyle}>{rowData.replyCount}看帖</Text>
                </View>

            </View>

        </TouchableOpacity>





     );
    },
    //跳转详情页
    pushToDetail(rowData){
        this.props.navigator.push({
           component:DetailPage,
            title:rowData.title,
            passProps:{rowData}

        });


    },
    renderHeader(){
        if (this.state.adsArr.length == 0) {return}
      return(

        <Carousel

            imageDataArr = {this.state.adsArr}
        />

      );


    },
        //获取数据
    componentDidMount(){
        this.LoadDataFromNet();
    },

    LoadDataFromNet(){

        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=>{

                console.log(responseData);
                let jsonData = responseData[item];
                console.log(this.props.url_api);

            })
            .catch((error)=>{
                if(error){
                    let JsonData = LocalData["T1348647853363"];
                    //广告数据 新闻数据
                    let ADS = [],
                        News = [];
                    for (var i = 0 ; i < JsonData.length;i++){
                        let data = JsonData[i];
                        if (data.hasAD == 1){
                            ADS = data.ads;

                        }else{
                            News.push(data);

                        }


                    }
                //    更新状态机
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(News),
                        adsArr:ADS

                    });

                }


            })


    }




});
var styles = StyleSheet.create({

    cellStyle:{

     flexDirection:'row',
        alignItems:'center',
        padding:10,
        height:120,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5

    },

    imageStyle:{
        height:70,
        width:70

    },
    contentViewStyle:{
        width:240,
        marginLeft:5
    },
    contentStyle:{
      fontSize:13,
        color:'#222222',

    },
    subStyle:{
        fontSize:12,
        color:'#666666',

    },
    replyStyle:{
        // 绝对定位

        bottom:-10,
        right:10,
        borderColor:'#999999',
        borderRadius:2,
        borderWidth:0.5,
        fontSize:12,
        position:'absolute',
        padding:2
    }

});

module.exports = Home;