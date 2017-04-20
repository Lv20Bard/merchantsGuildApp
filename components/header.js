import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Header
export default class Header extends Component{
  render(){
    return(
      <View style={styles.header}>
        <Text style={styles.headerText}>The Merchants Guild</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  // Header Styles
  header: {
    alignItems:'center',
    flex: 0,
    backgroundColor: '#418c18',
    paddingBottom:10,
  },
  headerText:{
    color:'white',
    marginTop:18,
    fontSize:18,
  },
  
});


