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
<<<<<<< HEAD
// var Listwine = require('./ListView/ListWine');
// var Loginview = require('./Login/LoginView');
var  NineBox = require('./NineBox/NineBox');
=======
var Listwine = require('./ListWine');
>>>>>>> f792467c04adf3de9904a9c95d69ffe8d8e31541
export default class Modules extends Component {
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <NineBox />
=======
        <Listwine />
>>>>>>> f792467c04adf3de9904a9c95d69ffe8d8e31541

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD

=======
>>>>>>> f792467c04adf3de9904a9c95d69ffe8d8e31541
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:20,
  },

});

AppRegistry.registerComponent('Modules', () => Modules);
