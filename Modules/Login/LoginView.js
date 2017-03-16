/**
 * Created by hexiaowen on 2017/2/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
class LoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
<Image source={require('./img/icon.png')} style = {styles.headerImage} />
            <TextInput style={styles.inputStyle}
                       placeholder={'请输入用户名'}
                       clearButtonMode={'always'}
            />
            <TextInput style={styles.inputStyle}
                       placeholder={'请输入密码'}
                       password={true}
                       clearButtonMode={'while-editing'}
            />

                {/*登录按钮*/}

                <View style={styles.loginBtnStyle}>
                    <Text>登录</Text>

                </View>
                {/*设置*/}
                <View style={styles.settingStyle} >
                    <Text style={{ alignSelf:'center', color:'lightblue'}}>无法登陆</Text>
                    <Text style={{ alignSelf:'center',  color:'lightblue'}}>新用户</Text>

                </View>

                {/*第三方登录*/}
                <View style={styles.otherViewStyle} >
                    <Text >其他登录方式</Text>
                    <Image source={require('./img/icon3.png')} style={styles.otherImageStyle} />
                    <Image source={require('./img/icon7.png')} style={styles.otherImageStyle} />
                    <Image source={require('./img/icon8.png')} style={styles.otherImageStyle} />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        // position:'relative',
    },
    headerImage:{
        height:80,
        width:80,
        borderWidth:3,
        borderColor:'white',
        borderRadius:40,
        marginBottom:30,
        marginTop:80,


    },

    inputStyle:{
        borderWidth:1,
        borderColor:'#e8e8e8',
        width:width,
        height:40,
        width:width,
        marginBottom:0.5,
        textAlign:'center',



    },
    loginBtnStyle:{
        backgroundColor:'blue',
        marginTop:30,
        height:40,
        width:width*0.9,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,


    },
    settingStyle:{
        // backgroundColor:'red',
        height:30,
        width:width*0.9,
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',




    },
    otherViewStyle:{

        //    主轴方向
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:20,
        left:20,


    },
    otherImageStyle:{
        marginLeft:10,
        width:40,
        height:40,


    }

});

module.exports = LoginView;