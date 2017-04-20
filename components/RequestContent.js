import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import RequestCards from './RequestCards';
import Footer from './footer'

// Header
export default class RequestContent extends Component{
  constructor(props){
    super(props)


    this.navigate = this.navigate.bind(this);
  }

  navigate(route){
    this.props.navigator.push({
      route
    })
  }
  
  render(){
    return(
      <View style={{flex:1}}>
        <ScrollView style={styles.container}>
          <RequestCards navigator={this.props.navigator}/>
        </ScrollView>
        <Footer navigator={this.props.navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    }
  
});


