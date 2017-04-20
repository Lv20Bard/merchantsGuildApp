import React, { Component } from 'react';
import { Text, View, Navigator, TouchableHighlight, StyleSheet,ScrollView } from 'react-native';

import Header from './header';
import StoreContent from './StoreContent';
import RequestContent from './RequestContent';
import LoginPage from './login';
import PostStore from './PostStore';
import PostRequest from './PostRequest';

import StoreItem from './StoreItem';

export default class Nav extends Component {
    
    constructor(){
        super()

        this.renderScene = this.renderScene.bind(this);
       

     
        
    }
    
    renderScene(route, navigator){
        console.log('route');
        console.log(route);
        if(route.name === 'store' ){
            return <StoreContent navigator={navigator} />
        }
        else if(route.name === 'requests' ){
            return <RequestContent navigator={navigator} />
        }
        else if(route.name === 'login' ){
            return <LoginPage navigator={navigator} />
        }
        else if(route.name === 'postStore' ){
            return <PostStore navigator={navigator} />
        }
        else if(route.name === 'postRequests'){
            return <PostRequest navigator={navigator} />
        }
        else if(route.name === 'storeItem' ){
            return <StoreItem navigator={navigator} />
        }
    }
    
  

    render(){


        return(
            <View style={{flex:1}}>
                <Header />
                <Navigator 
                    initialRoute={{name: 'store'}}
                    renderScene={this.renderScene}
                    style={{flex:1}}  
                />
                
            </View>    
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
       
        flex:1,     
    },
    header: {       
        alignItems:'center',
        flex: 0,
        backgroundColor: '#418c18',
        paddingBottom:10,
    },
        headerText:{
        color:'white',
        marginTop:18,
        fontSize:18,
    },


});
