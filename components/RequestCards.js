import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RequestCard from './RequestCard';


// List of Cards
export default class requestList extends Component{
  constructor(props){
    super(props);


    console.log(this.props);
    this.state={
      requestList:[]
    }
  }
  
  // Functions to grab the data and populate the list
  componentDidMount(){
    fetch('http://localhost:3000/requests',{ })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({requestList:responseJson});
    })
    .catch(function(err){
      if(err){
          console.log(err);
      }
    });
  }

  render(){
    var allRequests = this.state.requestList.map(function(theRequests){
      return(
      
          <RequestCard data={theRequests} key={theRequests._id}  />        
      )
    });  
    
    return(
      <View>
        {allRequests}
      </View>
    )
  }
}