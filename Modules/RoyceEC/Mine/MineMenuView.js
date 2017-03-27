/**
 * Created by hexiaowen on 2017/3/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
let MiddleData = require('./MiddleData.json');
let InnerView = require('./InnerView');
export default  class MineMenuView extends Component{

    render(){
        return(
            <View style={styles.container}>
                {this._renderMenu()}
            </View>


        );


    };
    _renderMenu(){
       let menus = [];
        for(var i = 0; i < MiddleData.length ;i++){
            let data = MiddleData[i];

            menus.push(
                <InnerView key={i} _iconName={data.iconName} _title={data.title}/>

            );

        }
        return menus;

    }

}




const styles = StyleSheet.create({

    container: {
        // 设置主轴的方向
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // 设置主轴的对齐方式
        justifyContent:'space-around',
        // height:80,
    },

});
module.exports = MineMenuView;



