import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import StoreCards from './StoreCards';
import Footer from './footer';

// Main Content
export default class StoreContent extends Component{
    constructor(props){
        super(props)
       

        this.navigate = this.navigate.bind(this);
    }

    navigate(name){
        this.props.navigator.push({
            name
        })
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView style={styles.container} >
                    <StoreCards navigator={this.props.navigator} />
                </ScrollView>
                <Footer navigator={this.props.navigator}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    }
  
});

