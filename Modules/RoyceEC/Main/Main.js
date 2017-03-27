import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');
export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

            selectedTab: 'home',
        };
    }
    render() {

        return (
                <TabNavigator
                    tabBarStyle={{ height: 49, width:width }}
                    tintColor='orange'
                >
                    {this._renderTabItem('home','首页',Home,'icon_tabbar_homepage','icon_tabbar_homepage_selected')}
                    {this._renderTabItem('shop','商家',Shop,'icon_tabbar_merchant_normal','icon_tabbar_merchant_selected')}
                    {this._renderTabItem('mine','我的',Mine,'icon_tabbar_mine','icon_tabbar_mine_selected')}
                    {this._renderTabItem('more','更多',More,'icon_tabbar_misc','icon_tabbar_misc_selected')}
                </TabNavigator>

        );
    };
    _renderTabItem(selectedTitle,name,component,icon,selectedIcon){
      return(
          <TabNavigator.Item
              selected={this.state.selectedTab === selectedTitle}
              title={name}
              renderIcon={() => <Image style={styles.imgStyle} source={{uri:icon}}  />}
              renderSelectedIcon={() => <Image style={styles.imgStyle} source={{uri:selectedIcon}}  />}
              onPress={() => this.setState({ selectedTab: selectedTitle })}
              selectedTitleStyle={{color:'orange'}}
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
    },
    imgStyle: {
        width: 28,
        height: 28,
    },

});

module.exports = Main;