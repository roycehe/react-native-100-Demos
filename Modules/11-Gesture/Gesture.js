import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  PanResponder,
  ProgressViewIOS,
  View
} from 'react-native';
let Dimensions = require('Dimensions');
let { width, height } = Dimensions.get('window');

export default class Gesture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress : 0,
            _PanResponder:null

        }

    };
    
    render() {

        return ( 
             <View style={styles.containerStyle}>
                <ProgressViewIOS 
                style={styles.ProgressViewStyle}
                progress={this.state.progress}
                />
                <Text style={styles.textStyle}>当前百分比{Math.round(this.state.progress * 100)}%</Text>
                {/*由于progress比较小,所有用一个背景透明的view来响应事件*/}
                <View style={styles.touchViewStyle}
                {...this._PanResponder.panHandlers}
                ></View>
            </View>


        );



    };
        // 添加监视器
    componentWillMount() { 
        this._PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            //点击回调
            onPanResponderGrant:this._onPanResponderGrant.bind(this),
            //滑动回调
            onPanResponderMove:this._onPanResponderMove.bind(this),
        });

    };
    //event原生事件
    //gestureState对象
    _onPanResponderGrant(event,gestureState){

        let touchPointX = gestureState.x0
        let progress = touchPointX / width;
        console.log(touchPointX,width,progress);
        this.setState({progress:progress,});
    };
    _onPanResponderMove(event,gestureState) {
        let touchMoveX = gestureState.moveX
        let progress = touchMoveX / width;
        console.log(touchMoveX,width,progress);
        this.setState({progress:progress});

     }
    

}

const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
    },
    
    ProgressViewStyle: {
         position:'absolute',
         width: width,
         top: 50,
     },
    touchViewStyle: {
        width: width,
        top:30,
        height:40,
        position:'absolute',
        backgroundColor:'transparent'


    }, 
    textStyle: {
    left: 20,
    top: 100,
     position:'absolute',
    fontSize: 20,
   
  },



});

module.exports = Gesture;