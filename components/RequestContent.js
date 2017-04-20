import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import RequestCards from './RequestCards';

// Header
export default class RequestContent extends Component{
  constructor(props){
    super(props)
  
    this.navigate = this.navigate.bind(this);
  }

  navigate(route){
    this.props.navigator.push({
      name
    })
  }
  
  render(){
    return(
      <ScrollView style={styles.container}>
        <RequestCards />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container:{

    }
  
});


