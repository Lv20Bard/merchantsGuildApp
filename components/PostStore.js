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

let StoreItem = t.struct({
    name:t.String,
    price:t.Integer,
    desciption:t.String,
    tags: t.String
});

const options = {};


export default class PostStore extends Component{
  constructor(){
    super()


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

  postItem(){
    var token = this._retrieveToken();
    var value = this.refs.form.getValue();
    if(value){
      fetch("http://localhost:3000/items" ,{
        method:"POST",
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: value.name,
          price: value.price,
          disciption: value.desciption,
          tags:value.tags,
          token: token
        })
      })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        AlertIOS.alert('Success');
      })
      .catch((err)=>{
        AlertIOS.alert('Error');
      })
    }
  }
  
  
  
  
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.container}>    
          <View style={styles.row}>
            <Text style={styles.title}>Post an Item for sale</Text>
          </View>
          {/*Form*/}
          <View style={styles.row}>
            <Form
              ref="form"
              type={StoreItem}
              options={options}
            />
          </View>
          <TouchableHighlight onPress={this.postItem.bind(this)} style={styles.button}>
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
    flex:1,
    padding: 20,
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


