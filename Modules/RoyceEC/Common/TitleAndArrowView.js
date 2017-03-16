/**
 * Created by hexiaowen on 2017/3/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch,
    Platform
} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var TitleAndArrow = React.createClass({
    getDefaultProps(){
        return{
            title:'',
            isSwitch:false,
            rightTitle:''

        }

    },
    getInitialState(){
      return{
          isON:false

      }

    },

    render(){
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    {/*左边*/}
                <Text style={{marginLeft:8}}>{this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRight()}
                </View>
            </TouchableOpacity>

        )


    },
    //右边内容
    renderRight(){
            if(this.props.isSwitch){
                return(
                    <Switch style={{marginRight:8}} value={this.state.isON == true} onValueChange={()=>{
                        this.setState({isON:!this.state.isON})
                    }
                    }></Switch>
                );
            }else{
               return(
                   <View style={{flexDirection:'row', alignItems:'center'}}>
                       {this.renderRightTitle()}
                       <Image  source={{uri:'icon_cell_rightarrow'}} style={{height:13, width:8,marginRight:10}} />
                   </View>

               );
            }



    },
    //右边文字
    renderRightTitle(){
        if (this.props.rightTitle.length){
            return(
                <Text style={{color:'gray', marginRight:5}}>{this.props.rightTitle}</Text>
            );

        }



    }



});

const styles = StyleSheet.create({
    container: {
        // 主轴的方向
        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 背景颜色
        backgroundColor:'white',
        // 垂直居中
        alignItems:'center',
        backgroundColor: 'white',
        height:Platform.OS == 'ios' ? 40 : 36,
        width:width,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
        // marginTop:20,
    },

});

module.exports = TitleAndArrow;