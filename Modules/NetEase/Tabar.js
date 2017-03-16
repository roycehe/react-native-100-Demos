/**
 * Created by hexiaowen on 2017/3/6.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';
let Dimensions = require('Dimensions');
let Width = Dimensions.get('window').width;

var Home = require('./Home');
var Discover = require('./Discover');
var  Message = require('./Message');
var Mine = require('./Mine');

var TabBar= React.createClass({

    getInitialState() {
        return {
            selectedItem: 'home',

        };
    },
    render(){
        return(
            <TabBarIOS style={styles.mainStyle}
                       tintColor="white"
                       barTintColor="black"
            >
                <TabBarIOS.Item

                    title="首页"
                    icon= {require('./TabBar/tabbar_home.png')}
                    selected={this.state.selectedItem === 'home'}
                    onPress={() => {
                        this.setState({
                            selectedItem: 'home',
                        });
                    }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        tintColor = "orange"
                        initialRoute = {
                        {
                            component: Home, // 具体的版块
                            title:'首页',
                            leftButtonIcon:require('./NavigationBar/navigationbar_friendattention.png'),
                            rightButtonIcon:require('./NavigationBar/navigationbar_pop.png'),

                        }
                        }
                    />

                </TabBarIOS.Item>
                {/*发现*/}
                <TabBarIOS.Item

                    title="发现"
                    icon= {require('./TabBar/tabbar_discover.png')}
                    selected={this.state.selectedItem === 'discover'}
                    onPress={() => {
                        this.setState({
                            selectedItem: 'discover',
                        });
                    }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        tintColor = "orange"
                        initialRoute = {
                        {
                            component: Discover, // 具体的版块
                            title:'发现',

                        }
                        }
                    />
                </TabBarIOS.Item>
                {/*消息*/}
                <TabBarIOS.Item
                    title="消息"
                    icon= {require('./TabBar/tabbar_message_center.png')}
                    selected={this.state.selectedItem === 'message'}
                    onPress={() => {
                        this.setState({
                            selectedItem: 'message',
                        });
                    }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        tintColor = "orange"
                        initialRoute = {
                        {
                            component: Message, // 具体的版块
                            title:'消息',

                        }
                        }
                    />
                </TabBarIOS.Item>
                {/*我的*/}
                <TabBarIOS.Item

                    title="我的"
                    icon= {require('./TabBar/tabbar_profile.png')}
                    selected={this.state.selectedItem === 'mine'}
                    onPress={() => {
                        this.setState({
                            selectedItem: 'mine',
                        });
                    }}>
                    <NavigatorIOS
                        style={{flex:1}}
                        tintColor = "orange"
                        initialRoute = {
                        {
                            component: Mine, // 具体的版块
                            title:'我的',
                        }
                        }
                    />
                </TabBarIOS.Item>



            </TabBarIOS>


        );


    }



});
var styles = StyleSheet.create({
    mainStyle: {
        width:Width,
        // flex: 1,
        // backgroundColor:'red'
        // alignItems: 'center',
    },

});

module.exports = TabBar;