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
  View
} from 'react-native';
var Listwine = require('./ListView/ListWine');
// var Loginview = require('./Login/LoginView');
export default class Modules extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Listwine />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:20,
  },

});

AppRegistry.registerComponent('Modules', () => Modules);
