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
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');
let Video = require('./Video/Video');
let More = require('./More/More');
let Upload = require('./Upload/Upload');

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
        selectedTab:'Video'

        }


    }
    render() {
        return ( 
          <View style = { styles.container } >
            <TabNavigator
                    tabBarStyle={{ height: 49, width:width }}
                    tintColor='black'
                >
                    {this._renderTabItem('Video','Video',Video,'video-1','video_h')}
                    {this._renderTabItem('Upload','Upload',Upload,'加号','加号-fill')}
                    {this._renderTabItem('More','More',More,'other','other_h')}
                </TabNavigator>

            </View>
        );
    };

     _renderTabItem(selectedTitle,name,component,icon,selectedIcon){
      return(
          <TabNavigator.Item
              selected={this.state.selectedTab === selectedTitle}
              title={name}
              renderIcon={() => <Image style={styles.iconStyle} source={{uri:icon}}  />}
              renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:selectedIcon}}  />}
              onPress={() => this.setState({ selectedTab: selectedTitle })}
              selectedTitleStyle={{color:'black'}}
          >

              <Navigator
                  initialRoute={{ name: name, component:  component }}
                  //配置场景
                  configureScene=
                      {
                          (route) => {

                              //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js

                              return Navigator.SceneConfigs.PushFromRight;
                          }
                      }
                  renderScene={
                      (route, navigator) =>
                      {
                          let Component = route.component;
                          return <Component {...route.params} navigator={navigator} />
                      }
                  } />

          </TabNavigator.Item>
      )

    };
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // marginTop:20,

    },
    iconStyle: {
        width: 28,
        height: 28,
    },


});
module.exports = Login;