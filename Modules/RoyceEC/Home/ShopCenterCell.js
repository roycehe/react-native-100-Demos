
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
var ShopCenterItem = React.createClass({
    getDefaultProps(){
        return{
            shopImage: '',
            shopSale:'',
            shopName: '',
            url: '',
            popShopCenter: null
        }
    },

    render(){

        return(
            <TouchableOpacity onPress={()=>this.clickItem(this.props.url,this.props.shopName)}>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri: this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>

                </View>
            </TouchableOpacity>
        );
    },

    clickItem(url,name){
        // 判断
        if (this.props.url == null) return;

        this.props.popShopCenter(url,name);
    }

});


const styles = StyleSheet.create({
    container: {
        marginTop:15
    },


    imageStyle:{
        width:120,
        height:100,
        borderRadius:8
    },


    itemViewStyle:{
        margin:5
    },

    shopSaleStyle:{
        // 绝对定位
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'red',
        color:'white',
        padding:2
    },

    shopNameStyle:{
        textAlign:'center',
        marginTop:5
    }
});

// 输出组件类
module.exports = ShopCenterItem;
