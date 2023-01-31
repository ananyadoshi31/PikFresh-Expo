import React, { useState,useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    Button,
    Pressable,

    // CustomButton,
  } from 'react-native';
// import { RollInRight } from "react-native-reanimated";

 
 // import "@fontsource/oleo-script";
  //import { ImageBackground } from "react-native";
 //import CustomButton from '../utils/CustomButton';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SQLite from 'react-native-sqlite-storage';
// import { useSelector, useDispatch } from "react-redux";
// import { setName,setAge } from "../redux/actions";
// import PushNotification from "react-native-push-notification";



export default function CreateAccount({navigation})
{
    const onPressHandlerLogin=()=>{
        navigation.navigate('Login')
        
      }
return (
 
      <View style={styles.container}>
        <Image style = {styles.loginphoto} source = {require('../../assets/createacc.png')} />
        <View style={styles.outer}>
        <Text style={styles.text}>
          Create New Account
          </Text>
        </View>
        <View style={styles.inner}>
        <Text style={styles.credential}>
                Name:
            </Text>
            <TextInput
                style={styles.input}
            />
            <Text style={styles.credential}>
                Email:
            </Text>
            <TextInput
                style={styles.input}
            />
            <Text style={styles.credential}>
                Password:
            </Text>
            <TextInput
                style={styles.input}
            />
            
            <Pressable style={styles.loginbutton} >
                <Text style={styles.loginbuttontext}>Register</Text>
            </Pressable>
            <Text 
                style={{
                    fontSize:15,
                    fontFamily:'JosefinSans-SemiBold',
                    color:'#000000',
                    bottom:-55,
                    textAlign:'center',
                    left:-40

                  }}
            >
                Already have an account ?
            </Text>
            <Pressable 
                onPress={onPressHandlerLogin} 
            >
                <Text style={styles.text1}>Login</Text>
            </Pressable>
        </View>
          
       </View>
      
       
    )
}

  const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'#9BCCA5'
   },
   outer:{
    backgroundColor:'#D9D9D9',
    height:568,
    top:280,
    borderRadius:40,
    width:'100%'
   },
   inner:{
    backgroundColor:'#ffffff',
    height:514,
    bottom:220,
    borderRadius:40,
    width:'100%'
   },
   text:{
    fontSize:28,
    color:'#000000',
    fontFamily:'JosefinSans-SemiBold',
    textAlign:'center',
    top:10,
   },
   loginphoto:
   {
    width: 680,
    height: 469,
    left: -130,
    top: -83,
    marginBottom:-480,
    alignItems:'center',
    resizeMode: 'contain',
    //alignSelf: 'center',
   },
   input:{
    top:20,
    width:'70%',
    height:50,
    backgroundColor: '#ffffff',
    borderColor: '#9BCCA5',
    borderWidth: 1,
    left:45,
    borderRadius:15,
   },
   credential:{
    top:20,
    padding:5,
    left:50,
    fontSize:25,
    color:'#000000',
    fontFamily:'JosefinSans-SemiBold',
   },
   loginbutton:{
    height:48,
    width:146,
    backgroundColor:'#9BCCA5',
    borderRadius:15,
    bottom:-50,
    left:130
   },
   loginbuttontext:{
    fontSize:20,
    textAlign:'center',
    color:'#000000',
    fontFamily:'JosefinSans-SemiBold',
    top:7,
   },
   
    text1:{
        color:"#000000",
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
        top:32,
        left:100,
    },
   
  })