import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class FirstScreen extends React.Component{
    static navigationOptions = {
        title:'首页',

    };
    render(){
         const { navigate } = this.props.navigation;
        return (
            <View 
            >
                <Text> Hell Navigation!
                </Text>
                <Button onPress={() => navigate('Params')} 
                      title="导航测试" >next</Button>
            </View>
                

           
            );
       

    }

}
class ParamsScreen extends  React.Component{
    static navigationOptions = {
        title:'第二页'

    };
    render(){
         const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>Hello, Params</Text>
                <Button onPress={() => navigate('Chat',{user:'Lucy',
                    title:'详情'})} 
                      title="Params with Lucy" >next</Button>
            </View>

        );

    }


}
//10.7.5

class ChatScreen extends  React.Component{
    
    static navigationOptions = {
        title: ({ state }) => `Chat with ${state.params.title}`

    };
    render(){

        // 屏幕上的当前 route 传递到 'props.navigation.state' 中:
    const params = this.props.navigation.state.params

        return(
            <View>
                <Text>Chat with {params.user}</Text>
                
            </View>

        );

    }


}

const SimpleAppHomeScreen = StackNavigator({
  Home: { screen: FirstScreen }, //绑定HomeScreen为Home（唯一标识）页
  Params:{screen: ParamsScreen},
  Chat:{screen: ChatScreen},
});
module.exports = SimpleAppHomeScreen;