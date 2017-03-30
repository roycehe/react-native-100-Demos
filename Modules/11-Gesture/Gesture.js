import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PanResponder,
    TouchableOpacity,
    ProgressViewIOS

} from 'react-native';
import Gesture from 'Geolocation';

import Dimensions from 'Dimensions';
let { width, height } = Dimensions.get('window');

export default class Location extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progess: 0,

        }

    };

    render() {

        return ( <
            View style = { styles.containerStyle } >
            <
            Text style = { styles.textStyle } > { this.state.longitude } < /Text> <
            Text style = { styles.textStyle } > { this.state.longitude } < /Text> <
            /View>


        );



    };

    componentWillMount() {
        this.watch = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: this._onPanResponderGrant,
            onPanResponderMove: this._onPanResponderMove,

        });

    };
    componentDidMount() {



    };





}
const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        alignItems: 'center'



    },
    ProgressViewStyle: {
        width: 20,


    }




});

// 输出组件类
module.exports = Gesture;