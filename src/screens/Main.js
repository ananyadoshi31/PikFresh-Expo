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
    TouchableOpacity,

    // CustomButton,
  } from 'react-native';
// import { RollInRight } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { firebase } from '../../config';
import { useFonts } from 'expo-font';
export default function Main({navigation})
{
  
    
  const onPressHandlerScan=()=>{
    navigation.navigate('SelectFruit')
    
  }
  const onPressHandlerSupport=()=>{
    navigation.navigate('Support')
    
  }
  const onPressHandlerLogin=()=>{
    navigation.navigate('Login')
    
  }



  const[name,setFirstName]=useState('')
    useEffect(()=>{
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
            if(snapshot.exists){
                setFirstName(snapshot.data())
            }
            else{
                console.log('User doesnot exists!')
            }
        })
    }, [])


    const [loaded]=useFonts({
      OleoScriptRegular:require('../../assets/fonts/OleoScript-Regular.ttf'),
      BreeSerifRegular:require('../../assets/fonts/BreeSerif-Regular.ttf'),
    });
    
  
    if(!loaded){
      return null;
    }
    return (

    
      <View style={styles.container}>
          <ImageBackground 
            source={require('../../assets/Home.png')} 
            style={styles.img}
          >
            <Text style={styles.usertxt}>
              Hello, {name.name}
            </Text>

      
            <Text style={styles.title}>
                PikFresh
            </Text>
            <Text style={styles.goodq}>
                ...A future to good quality
            </Text>
        <Pressable style={styles.button1} 
          onPress={onPressHandlerScan} 
        >
        <Image style = {styles.logo} source = {require('../../assets/scan_img.png')} />
          <Text style={styles.stylebutton1}>Scan</Text>
        </Pressable>

        <Pressable style={styles.button3}
            onPress={onPressHandlerSupport} 
        >
        <Image style = {styles.logo} source = {require('../../assets/support_img.png')} />
          <Text style={styles.stylebutton3}>Support</Text>
        </Pressable>
 
            <TouchableOpacity 
                onPress={()=>{firebase.auth().signOut()}}
                style={styles.button}
                >
                    <Text style={styles.signouttxt}>Sign out</Text>
            </TouchableOpacity>
        </ImageBackground>    
       </View>

    )
}
// }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title:{
        color:"#0B5635",
        textAlign:'center',
        fontSize:48,
        fontFamily:'OleoScriptRegular',
        marginTop:80,

    },
    goodq:{
      color:"#0B5635",
      marginLeft:160,
      fontSize:20,
      fontFamily:'OleoScriptRegular',
    },
    img:{
      height:'100%',
      width:'100%'
    },
    stylebutton1:{
      //flex:1,
      color:"#0B5635",
      marginRight:170,
      fontSize:36,
      bottom:55,
      fontFamily:'OleoScriptRegular',
      
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton2:{
      //flex:1,
      color:"#0B5635",
      fontSize:36,
      marginRight:130,
      bottom:55,
      fontFamily:'OleoScriptRegular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton3:{
      //flex:1,
      color:"#0B5635",
      marginRight:125,
      bottom:55,
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    button1: {
      textAlign:'left',
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      marginTop:170,
      marginLeft:50,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,

      
    },
    button2: {
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:50,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,


      
    },
    button3: {
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:50,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,

      
    },
    logo:{
      width:55,
      height:60,
      marginTop:45,
      marginLeft:240,
    },
    login:{
      backgroundColor:'#ffffff',
      
    },
    loginbutton:{
      color:'#000000',
      fontFamily:'OleoScriptRegular',
      fontSize:22,
      width:100,
      height:45,
      left:330,
      top:50,
      
    },
    button:{
        marginTop:50,
        height:50,
        width:150,
        backgroundColor:'#9BCCA5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        textAlign:'center',
        left:120,
        bottom:-70,

    },
    usertxt:{
      fontSize:20,
      fontFamily:'OleoScriptRegular',
      fontWeight:'bold',
      left:270,
      top:30,
    },
    signouttxt:{fontSize:22, fontWeight:'bold',fontFamily:'OleoScriptRegular'}
    
  })