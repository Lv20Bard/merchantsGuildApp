import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

// footer
export default class Footer extends Component{
  constructor(){
      super();

      this.navigate = this.navigate.bind(this)
  }

  navigate(name){
      this.props.navigator.push({
          name
      })
  }
  
  
  render(){
    return(
      <View style={styles.footer}>
        <TouchableHighlight onPress={() => this.navigate('store')} style={styles.btn}>
            <Text style={styles.btnTxt}>Store</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigate('requests')}>
            <Text style={styles.btnTxt}>Request</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigate('postStore')}>
            <Text style={styles.btnTxt}>Post Item</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigate('postRequests')}>
            <Text style={styles.btnTxt}>Post Request</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.navigate('login')}>
            <Text style={styles.btnTxt}>Login</Text>
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
    fontSize:14,
  },

  
  
});


