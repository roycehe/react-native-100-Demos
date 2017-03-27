import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var ShopCenterHeader = require('./ShopCenterHeader');
var ShopCenterItem = require('./ShopCenterCell');
// 引入外部的json数据
var Home_D5 = require('../LocalData/XMG_Home_D5.json');
var ShopCenterView = React.createClass({
    getDefaultProps(){
        return{
        //向上传递
            popDataToHome:null

        }


    },
    render() {
        return (

                <View style={styles.container}>
                {/*头*/}
                <ShopCenterHeader
                    leftIcon="gw"
                    leftTitle="购物中心"
                    rightTitle={Home_D5.tips}
                />
                    {/*列表*/}
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style = {styles.srollStyle}
                    >

                        {this._renderShopItems()}

                    </ScrollView>
                </View>

        );
    },
    //购物中心列表
    _renderShopItems(){
        var items = [];
        var datas = Home_D5.data;
        for (var i = 0; i < datas.length;i++){
            let itemData = datas[i];
            items.push(
                <ShopCenterItem
                shopImage = {itemData.img}
                shopSale = {itemData.showtext.text}
                shopName = {itemData.name}
                url = {itemData.detailurl}
                key={i}
                popShopCenter = {(url,name) => this._popToHome(url,name)}

                />

            );


        }
        return items;

    },
    //实现向上传递
    _popToHome(url,name){

        // if (this.props.popDataToHome() == null) return;

        this.props.popDataToHome(url,name);
    }

});

const styles =  StyleSheet.create({

    container: {
        marginTop:15,
    },
    srollStyle:{
        flexDirection:'row',
        backgroundColor:'white',

    }

});


module.exports = ShopCenterView;