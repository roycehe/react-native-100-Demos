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
import CountDownReact from './CountDownReact'
export default class ShopTopView extends Component{
    constructor(props){
        super(props)
        this.timestamp = "2017-04-01T00:00:00+00:00"


    }
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
                <Text> 距离结束还剩</Text>
                <CountDownReact
                    date={this.timestamp}
                    days={{plural: '天 ',singular: '天 '}}
                    hours=':'
                    mins=':'
                    segs=''

                    daysStyle={styles.cardItemTimeRemainTxt}
                    hoursStyle={styles.cardItemTimeRemainTxt}
                    minsStyle={styles.cardItemTimeRemainTxt}
                    secsStyle={styles.cardItemTimeRemainTxt}
                />
            </View>
        )
    };


}


const styles = StyleSheet.create({
    container: {
        height:50,
        backgroundColor:'rgba(109,191,174,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    leftViewStyle:{

        height:32,
        borderRadius:16,
        backgroundColor:'rgba(222,222,222,0.4)',
        width:90,
        marginLeft:15,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'



    },
    rightViewStyle:{
        // width:120,
        height:50,
        flexDirection:'row',
        marginRight:15,
        alignItems:'center'


    },

    cardItemTimeRemainTxt: {
        fontSize: 16,
        color: '#ee394b'
    },

});

module.exports = ShopTopView;