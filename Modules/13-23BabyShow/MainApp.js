
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabScroll from 'react-native-scrollable-tab-view';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

let Video = require('./Video/Video');
let More = require('./More/More');
let Upload = require('./Upload/Upload');
let Picture = require ('./Picture/Picture.js');
let TabBar = require('./DTabBar.js');

export default class BabyShow extends Component{

    constructor(props){
        super(props)
        this.state= {
            tabNames:['Video','Recording','Picture','Mine'],
            tabIconNames:['ios-videocam', 'ios-recording', 'ios-reverse-camera', 'ios-contact'],
        }

    };
    render(){
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return(
            <TabScroll 
                renderTabBar={() => <TabBar tabTitles={tabNames} tabIconNames={tabIconNames}/>}
                //TabBar位置  top：位于屏幕顶部  bottom：位于屏幕底部 overlayTop：位于屏幕顶部，悬浮在内容视图之上 overlayBottom：位于屏幕底部，悬浮在内容视图之上
                tabBarPosition='bottom'
                //Tab切换之后会触发此方法，包含一个参数（Object类型），这个对象有两个参数(i,ref)
                onChangeTab={
                    (obj)=>{
                        {/*alert('click'+obj);*/}

                    }

                }
                //视图正在滑动的时候触发此方法，包含一个Float类型的数字，范围是[0, tab数量-1]
                onScroll={
                    (position) => {
                        {/*alert('scroll'+position);*/}
                    }

                }
                //表示手指是否能拖动视图
                locked={false}
                //初始化时被选中的Tab下标
                initialPage={0}
                prerenderingSiblingsNumber={1}

            >
            {/*每个被包含的子视图需要使用tabLabel属性 表示对应Tab显示的文字*/}
                <Video tabLabel='Video' />

                <Picture tabLabel='Picture'/>

                <Upload tabLabel='Upload'/>

                <More tabLabel='More'/>

            </TabScroll>


        );

    }



}
module.exports = BabyShow;