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

    console.log(props);  

    this.navigate = this.navigate.bind(this);
  }

  navigate(route){
    this.props.navigator.push({
      route
    })
  }
  
  render(){
    return(
      <View>
        <ScrollView style={styles.container}>
          <RequestCards />
        </ScrollView>
        <Footer navigator={this.props.navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{

    }
  
});


