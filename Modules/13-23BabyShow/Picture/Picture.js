import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';




export default class More extends Component {

    render() {
        return ( 
          <View style = { styles.container } >
            <Text>照片</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // marginTop:20,

    },

});
module.exports = More;