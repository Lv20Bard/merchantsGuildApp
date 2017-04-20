import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

// Header
export default class Footer extends Component{
  render(){
    return(
      <View style={styles.footer}>
        <TouchableHighlight onPress={() => this.props.navigator.push('store')} style={styles.btn}>
            <Text style={styles.btnTxt}>Store</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigator.push('requests')}>
            <Text style={styles.btnTxt}>Request</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigator.push('postStore')}>
            <Text style={styles.btnTxt}>Post</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  // Header Styles
  footer: {
    alignItems:'center',
    flex: 0,
    backgroundColor: '#418c18',
    paddingBottom:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  btn:{

  },
  btnTxt:{
    color:'white',
    marginTop:18,
    fontSize:18,
  },

  
  
});


