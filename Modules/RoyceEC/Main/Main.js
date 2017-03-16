/**
 * Created by hexiaowen on 2017/3/11.
 */
/**
 * Created by hexiaowen on 2017/3/11.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Image

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var  Mine = require('../Mine/Mine');
var More = require('../More/More');

var Main = React.createClass({
    getInitialState(){
      return{

          selectedTab:'home'

      }


    },

    render(){
        return(
        <TabNavigator style={styles.tabStyle}>
            {/*首页*/}
            {this.renderItem('home','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
            {/*商家*/}
            {this.renderItem('shop','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
            {/*我的*/}
            {this.renderItem('mine','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
            {/*更多*/}
            {this.renderItem('more','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}
        </TabNavigator>
        )

    },
    renderItem(selected, renderIcon, renderSelectedIcon, nameTitle, ctitle, Component,index){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selected}
                title = {ctitle}
                renderIcon={() => <Image style={styles.itemIcomSytle}  source={{uri: renderIcon}} />}
                renderSelectedIcon={() => <Image style={styles.itemIcomSytle}  source={{uri: renderSelectedIcon}} />}
                selectedTitleStyle = {styles.titlesStyle}
                onPress={() => this.setState({ selectedTab: selected })}>
                <Navigator
                    initialRoute={{name: nameTitle, index: index}}
                    renderScene={(route, navigator) =>
                        <Component
                            name={route.name}
                            onForward={() => {
                                var nextIndex = route.index + 1;
                                navigator.push({
                                    name: nameTitle + nextIndex,
                                    index: nextIndex,
                                });
                            }}
                            onBack={() => {
                                if (route.index > 0) {
                                    navigator.pop();
                                }
                            }}
                        />
                    }
                /></TabNavigator.Item>
        )

    }


});

const styles = StyleSheet.create({
    tabStyle: {
        flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
            // marginTop:20,
        width:width,
    },
    itemIcomSytle:{
        width:30,
        height:30,

    },
    titlesStyle:{

        color:'orange'
    }

});

module.exports = Main;