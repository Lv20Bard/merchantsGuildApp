import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StoreCard from './StoreCard';


// List of Cards
export default class StoreCards extends Component{
  constructor(props){
    super(props);
    console.log(this.props);
    this.state={
      storeItems:[]
    }
  }
  
  // Functions to grab the data and populate the list
  componentDidMount(){
    fetch('http://localhost:3000/items',{ })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({storeItems:responseJson});
    })
    .catch(function(err){
      if(err){
          console.log(err);
      }
    });
  }

  render(){
    let AllStoreItems = this.state.storeItems.map(TheStoreItems => {
      return(  
          <StoreCard key={TheStoreItems._id} data={TheStoreItems}  navigator={this.props.navigator}/>
      )

    });

    

    return(
      <View>
        {AllStoreItems}
      </View>
    )
  }
}