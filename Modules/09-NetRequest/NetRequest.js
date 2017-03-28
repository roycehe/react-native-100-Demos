/**
 * Created by hexiaowen on 2017/3/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NetInfo,
    TouchableOpacity

} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default  class NetRequest extends Component{

    constructor(props){
        super(props);
        this.state = {

            isConnected:null,
            connectInfo:'',

        };

    };

    render(){

        return(
            <View style={styles.containerStyle}>
               <Text style={styles.textStyle}>{this.state.isConnected}</Text>
                <Text style={styles.textStyle} >{this.state.connectInfo}</Text>
                <TouchableOpacity  activeOpacity={0.5}
                                   onPress={this._postRequest.bind(this)}
                >
                <Text style={styles.textStyle} >Post请求</Text>
                </TouchableOpacity>
            </View>


        );



    };
    _postRequest(){
        //地址
        let url = 'https://postman-echo.com/transform/collection';
        //协议
        let map = {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        //参数
        map.body=JSON.stringify({
                from:1,
                to:2,

            }
        );
        //如果你的服务器无法识别上面POST的数据格式，那么可以尝试传统的form格式
        //   map.body = 'from=1&to=2';
        //发起请求
        fetch(url, map)
            .then((response) => response.text())
            .then((responseJson) => {
                alert(responseJson);

            })
            .catch((err) => {
                alert('服务器返回错误：' + err + url+ map);
            });


    }

    componentDidMount() {
        //添加网络是否连接的监听者
        NetInfo.isConnected.addEventListener('isConnected', this._handleNetStatus);
        //添加网络状态变化的监听者
        NetInfo.addEventListener('statusChange', this._handleNetChange);


        //检查网络状态
        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                this.setState({isConnected:isConnected});
            }

        );
        //检查网络类型
        NetInfo.fetch().done( (netType) => {
            this.setState({
                connectInfo:netType
            });

        });


    };

    componentDidUnMount() {
        //移除监听
        NetInfo.isConnected.removeEventListener('isConnected', this._handleNetStatus);
        NetInfo.removeEventListener('statusChange', this._handleNetChange);
    };
    _handleNetStatus = (isConnected) => {
        console.log('First, is ' + (isConnected ? 'online' : 'offline'));

    };

    _handleNetChange = (status) => {

        console.log('Then, is ' + status);

    };



}
const styles = StyleSheet.create({

    containerStyle:{
        flex:1,
        alignItems:'center'



    },
    textStyle:{
        marginTop:50,

    }



});

// 输出组件类
module.exports = NetRequest;