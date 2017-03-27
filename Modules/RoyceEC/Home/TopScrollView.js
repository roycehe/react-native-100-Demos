import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

// 引入外部的json数据
var TopMenu = require('../LocalData/TopMenu.json');
var TopListView = require('./TopListView');


var TopScrollView = React.createClass({
    getInitialState(){
      return{

          activePage: 0

      }

    },
    render(){
        return(
            <View style={styles.containerStyle}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}

                >

                    {this._renderScrollItems()}
                </ScrollView>
                {/*指示器*/}
                <View style={styles.indicatorStyle}>
                    {this._renderIndicator()}
                </View>

            </View>


        );


    },

    _renderScrollItems(){
    //组件数组
        var listArr= [];
     //数据数组
        let dataArr = TopMenu.data;


            for(var i = 0; i < dataArr.length;i++){
                listArr.push(
                <TopListView key={i}
                             dataArr={dataArr[i]}
                />

                );
            }


        return listArr;

    },
    //指示器
    _renderIndicator(){
        //指示器数组
        var indicatorArr = [];
        //样式数据
        var style;
        for (var i = 0 ; i < 2; i++){
            style = (i == this.state.activePage) ? {color:'orange'} : {color:'gray'};
            indicatorArr.push(

                <Text key ={i} style={[{fontSize:25}, style]} >&bull;</Text>

            );



        }

            return indicatorArr;

    },
    //当一帧滚动结束的时候调用
    onScrollAnimationEnd(e){
        //当前页码
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);

        //更新状态机
        this.setState({

            activePage:currentPage
        })

    },


});
const styles = StyleSheet.create({

    containerStyle:{
        backgroundColor:'white',

    },
    indicatorStyle:{
        flexDirection:'row',
        justifyContent:'center',

    }
});

module.exports = TopScrollView;