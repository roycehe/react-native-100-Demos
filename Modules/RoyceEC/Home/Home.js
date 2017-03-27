/**
 * Created by hexiaowen on 2017/3/11.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    TabNavigator

} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var TopScrollView = require('./TopScrollView');
var EventTop = require('./EventView');
var EventBottom = require('./EventBottomView');
var ShopCenterView = require('./ShopCenterView');
var ShopDetail = require('./ShopCenterDetail');
var Home = React.createClass({

    render(){
        return(
            <View style={styles.container}>
                {this.renderNavi()}
                {/*菜单*/}
                <ScrollView >
                    <TopScrollView style={styles.topViewStyle} />
                    <EventTop />
                    <EventBottom />
                    <ShopCenterView
                        popDataToHome = {(url,name) => this._pushDetailView(url,name)}
                    />
                </ScrollView>
            </View>
            )


    },
    renderNavi(){
        return(

            <View style={styles.navigatorStyle}>
                <View style={styles.statusStyle}></View>
                <View style={styles.naviStyle}>
                    <Text>杭州</Text>
                    <TextInput placeholder={'搜索条件'} style={styles.searchStyle}></TextInput>
                    <Image source={{uri:'icon_homepage_message.png'}} style={styles.iconStyle}/>
                    <Image source={{uri:'icon_homepage_scan.png'}} style={styles.iconStyle}/>
                </View>



            </View>

        );

    },
    _pushDetailView(url,name){
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: name,
                component: ShopDetail,
                params:{
                    Durl:url,
                    shopName:name
                }
            })
        }
        // this.props.navigator.push(
        //     {
        //     //要去的页面
        //     component:ShopDetail,
        //     passProps:{
        //         url:this._dealWithUrl(url),
        //         name:name
        //     },
        //     title:name,
        //     }
        // );



    },
    _dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=', '');
    },


});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // marginTop:20,
    },
    //导航条
    navigatorStyle:{

        width:width,
        height:64,
        marginTop:0,
        backgroundColor:'orange',
        alignItems: 'center',


    },
    statusStyle:{
        height:20,
        width:width,


    },
    naviStyle:{
        flexDirection:'row',
        alignItems:'center',
        height:44,
        width:width


    },
    searchStyle:{
        justifyContent:'space-around',
        width:0.68 * width,
        backgroundColor:'white',

        // 设置圆角
        borderRadius:17,

        // 内左边距
        paddingLeft:10,
        height:35,
        alignSelf:'center'


    },
    iconStyle:{
        height:28,
        width:28,

    },
//    菜单



});

module.exports = Home;