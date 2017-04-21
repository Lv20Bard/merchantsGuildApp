import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import Footer from './footer';

let STORAGE_KEY = 'token';

import t from 'tcomb-form-native';

let Form = t.form.Form;

let RequestItem = t.struct({
    name:t.String,
    budget:t.Integer,
    desciption:t.String,
    tags: t.String
});

const options = {};


export default class PostRequest extends Component{
  constructor(){
    super()

    this.postRequest = this.postRequest.bind(this);
  }
  
  async _retrieveToken(){
    try{
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      
      if(value){
        
        return(value);
      }
    }
    catch(err){
      AlertIOS.alert('Error');
    }
  }

  postRequest(){
    var token;
    this._retrieveToken()
    .then((response) => {
     
      token = response;
      var value = this.refs.form.getValue();


      if(value){
        fetch("http://localhost:3000/requests" ,{
          method:"POST",
          header: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: value.name,
            budget: value.price,
            disciption: value.desciption,
            tags: value.tags,
            token: token
          })
        })
        .then((response) => response.json())
        .then((responseJSON) => {
          console.log(responseJSON);
          AlertIOS.alert(''+responseJSON.message);
        })
        .catch((err)=>{
          AlertIOS.alert('Error');
        })
      }
    }) 
    .catch((err) => {
      console.log(err);
    });
  }
  
  
  
  
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.container}>    
          <View style={styles.row}>
            <Text style={styles.title}>Post an Request for sale</Text>
          </View>
          {/*Form*/}
          <View style={styles.row}>
            <Form
              ref="form"
              type={RequestItem}
              options={options}
            />
          </View>
          <TouchableHighlight onPress={this.postRequest} style={styles.button}>
              <Text style={styles.buttonText}>Post</Text>
          </TouchableHighlight>  
        </View>
        <Footer navigator={this.props.navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
    justifyContent: 'center',
    padding: 20,
    flex:1,
    backgroundColor: '#ffffff',
  },
  
  button: {
    height: 36,
    backgroundColor: '#d4af37',
    borderColor: '#b0912e',
    borderWidth: 1,
    borderRadius: 0,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  
  buttonLogout: {
    height: 36,
    backgroundColor: 'red',
    borderColor: '#b0912e',
    borderWidth: 1,
    borderRadius: 0,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  
   buttonText: {
    fontSize: 16,
    color: '#ffffff',
    alignSelf: 'center'
  },
  
});


