/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Image,
    TouchableOpacity
} from 'react-native';

// import TabNavigator from 'react-native-tab-navigator';

import Icon from 'react-native-vector-icons/Ionicons';

export default class BabyShowTab extends Component {
    static propTypes = {
        goToPage:React.PropTypes.func,//跳转二级页面
        activeTab:React.PropTypes.number,//当前选中下标
        tabs:React.PropTypes.array,//所有tabitem

        tabTitles:React.PropTypes.array,//item名称
        tabIconName:React.PropTypes.array,//图片名称
    };
    static defaultProps = {
        goToPage:null,//跳转二级页面
        activeTab:0,//当前选中下标
        tabs:[],//所有tabitem

        tabTitles:[],//item名称
        tabIconNames:[],//图片名称
    }



    render() {
         console.log(this.props);
        return ( 
          <View style = {styles.container} style={styles.tabBar}>
                {this.props.tabs.map((tab,i) => this.renderTabOption(tab,i))}
               
            </View>
        );
    };
    componentDidMount () {
        //动画监听
        this.props.scrollValue.addListener(this.setAnimationValue);
    };
    setAnimationValue(value){
            console.log('donghua'+value);

    };
    renderTabOption(tab,i){
        //判断当前是否选中 设置不同颜色
        let color = this.props.activeTab == i ? '#ee735c' : '#ADADAD';

        return(
            <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => this.props.goToPage(i)}
            style={styles.tab} 
            key={tab}>
                <View 
                style={styles.tabItem}
                >
                    <Icon
                    name={this.props.tabIconNames[i]}
                    size={30}
                    color={color}
                    />
                    <Text
                    style={{color:color}}
                    >
                    {this.props.tabTitles[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );

    };

}

const styles = StyleSheet.create({
    
    tabBar: {
       flexDirection:'row',
       height:50,
       backgroundColor:'#e8e8e8'

    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },


});
module.exports = BabyShowTab;