/**
 * Created by hexiaowen on 2017/3/29.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

export default class ShopTopView extends Component{

    render(){
        return(
            <View style={styles.container}>
                {this._renderLeftView()}
                {this._renderRightView()}
            </View>

        );

    };
    /**--上部分--**/
    _renderLeftView(){
        return(
            <View style={styles.leftViewStyle}>
                <Image source={{uri: 'icon_hot'}} style={{height:12,width:20}}/>
                <Text>限时抢购</Text>
            </View>
        )
    };

    /**--下部分--**/
    _renderRightView(){
        return(
            <View style={styles.rightViewStyle}>

            </View>
        )
    };


}


const styles = StyleSheet.create({
    container: {
        height:50,
        backgroundColor:'rgba(109,191,174,1.0)',
        alignItems:'center',
        flexDirection:'row',
    },
    leftViewStyle:{

        height:32,
        borderRadius:16,
        backgroundColor:'rgba(222,222,222,0.4)',
        width:100,
        marginLeft:15,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'


    },
    rightViewStyle:{


    },


});

module.exports = ShopTopView;