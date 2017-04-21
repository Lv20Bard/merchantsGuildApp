import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AsyncStorage,
  AlertIOS
} from 'react-native';

import Footer from './footer';

let STORAGE_KEY = "token";

import t from 'tcomb-form-native';

let Form = t.form.Form;

let Person = t.struct({
  email:t.String,
  password:t.String
});



const options = {};



export default class Login extends Component{

  async _onValueChange(item, selectedValue){
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  async _userSignup(){
    var value = this.refs.form.getValue();
    if(value){
      fetch('http://localhost:3000/users/', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: value.email,
          password: value.password,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this._onValueChange(STORAGE_KEY, responseData.token),
        AlertIOS.alert('Login Successful');
      })
      .catch((err) => {
        console.log(err);
      })
      .done();
    }
  }


  async _userLogin(){
    let value = this.refs.form.getValue();
    if(value){
      fetch( "http://localhost:3000/users/login",{
        method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: value.email,
          password: value.password,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        AlertIOS.alert('Login Successful');
         this._onValueChange(STORAGE_KEY, responseData.id_token)
       
      }) 
      .catch((err) => {
        AlertIOS.alert(
          "Login Unsuccessful",
          "Please double check your username and password"
        )
      })
      .done();
    }
  }

  async _userLogout(){
    try{
      await AsyncStorage.removeItem(STORAGE_KEY);
      AlertIOS.alert('Logout Successful');
    }
    catch(err){
     
       console.log('AsyncStorage error: ' + err.message);
    }
  }

  
  
  render(){
    return(
      <View style={{flex:1}}>    
        <View style={styles.container}>
          {/*Brand At Top*/}
          <View style={styles.row}>
            <Text style={styles.title}>Signup To Post and Buy!</Text>
          </View>
          {/*Form*/}
          <View style={styles.row}>
            <Form
              ref="form"
              type={Person}
              options={options}
            />
          </View>
          <View style={styles.row}>
            <TouchableHighlight onPress={this._userSignup.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableHighlight>  
            <TouchableHighlight onPress={this._userSignup.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>  
            <TouchableHighlight onPress={this._userLogout.bind(this)} style={styles.buttonLogout}>
              <Text style={styles.buttonText}>Logout</Text>
          </TouchableHighlight>  


          </View>
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


