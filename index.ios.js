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
  ScrollView,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';

import Nav from './components/Nav';

export default class merchantsGuildNative extends Component {
  render() {
    return (
      <View style={styles.container} >     
        <Nav  style={styles.navigator} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ScrollView:{
    flex:1,
    backgroundColor:'blue'
    
  },

  navigator:{
    flex:1,
    backgroundColor:'white'
  }

});

AppRegistry.registerComponent('merchantsGuildNative', () => merchantsGuildNative);
