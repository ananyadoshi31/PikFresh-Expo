import { DrawerActions, DrawerRouter, NavigationContainer } from "@react-navigation/native";
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

  import { useFonts } from 'expo-font';

  // import { createDrawerNavigator } from "@react-navigation/drawer";
  // import { NavigationContainer } from "@react-navigation/native";
  // import { ImageBackground } from "react-native";
// import CustomButton from '../utils/CustomButton';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SQLite from 'react-native-sqlite-storage';
// import { useSelector, useDispatch } from "react-redux";
// import { setName,setAge } from "../redux/actions";
// import PushNotification from "react-native-push-notification";
// const db =SQLite.openDatabase(
//     {
//         name:'MainDB',
//         location:'default',
//     },
//     ()=>{ },
//     error=>{console.log(error)}
// );
// const Drawer = createDrawerNavigator();
// const Drawer = createDrawerNavigator();

  export default function Support({navigation})
  {
    const onPressHandler = () => {
      navigation.navigate('Main')
      //navigation.goBack();
  }

  const [loaded]=useFonts({
        
    Sarabun:require('../../assets/fonts/Sarabun-Medium.ttf')
  });
  
  
  if(!loaded){
    return null;
  }
    return (
        <View
          style={styles.container}
        >    
          
          <View style={styles.inner}>
          </View>
          <View style={styles.textview}>
            <Text style={styles.text}>Hello</Text>
          </View>

          <View style={styles.textview}>
            <Text style={styles.text1}>
            Dwarkadas Jivanlal Sanghvi  of Engineering
            Plot No.U-15, J.V.P.D Scheme,
            Bhaktivedanta Swami Marg,
            Vile Parle West, Mumbai-400056
            </Text>
          </View>

          <View style={styles.textview}>
            <View style={styles.contactview}>
              <Text style={styles.text2}>Contact Us:</Text>
            </View>
            
            <View style={styles.boxcontent}>
              <Text style={styles.boxtext1}>
                +(91) 2242335000
              </Text>
              <Text style={styles.boxtext2}>
                info@djsce.ac.in
              </Text>
              <Text style={styles.boxtext3}>
                www.djsce.ac.in
              </Text>
            </View>

            {/* <View style={styles.about_box}> */}
              
              
              <View style={styles.pikFresh_box}>
                <Text style={styles.pikFresh_text}>
                  PikFresh is a user friendly app which aims 
                  to provide instant quality check of fruits with an expected period of survival.
                </Text>
              </View>
              <View style={styles.about_box}>
              <Text style={styles.about_text}>About us:</Text>
              </View>
                
              
            </View>

          {/* </View> */}

          <View style={styles.inner1}></View>

       </View>
    )
  }

  const styles = StyleSheet.create({
    
    container:{
      flex:1,
      backgroundColor:"#ffffff",
    },
    contactview:{
      alignItems:"center",
      top:-50,
    },
    textview: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: -750,
      left: -150,
      right: 0,
      bottom: -50,
    },
    boxcontent:{
      width:"40%",
      backgroundColor:"#9BCCA5",
      height:170,
      top:440,
      // borderRadius:30,
      // position: 'absolute',
      // justifyContent: 'center',
      // alignItems: 'center',
      left:70,
    },
    pikFresh_box:{
      width:"50%",
      backgroundColor:"#ffffff",
      // height:"5%",
      // top:450,
      bottom:-415,
      // borderRadius:30,
      // position: 'absolute',
      // justifyContent: 'center',
      // alignItems: 'center',
      left:75,
    },
    about_box:{

      // position: 'absolute',
      // justifyContent: 'center',
      
      left:10,
      top:-100,
    },
    boxtext1:{
      color:"#000000",
      width:"60%",
      left:45,
      top:10,
      fontFamily:"Sarabun"
    },
    boxtext2:{
      color:"#000000",
      width:"60%",
      left:52,
      top:30,
      fontFamily:"Sarabun"
      
    },
    boxtext3:{
      color:"#000000",
      width:"60%",
      top:50,
      left:45,
      fontFamily:"Sarabun"
    },

    text1:{
      color:"#000000",
      left:37,
      width:"40%",
      top:180,
      fontFamily:"Sarabun"
    },
    text2:{
      textAlign:"center",
      // position:"absolute",
      width:"100%",
      top:480,
      left:70,
      color:"#000000",
      fontFamily:"Sarabun"
    },
    about_text:{
      color:"#000000",
      fontFamily:"Sarabun",
      top:430,
      left:70,
    },
    pikFresh_text:{
      color:"#000000",
      width:"70%",
      left:42,
      top:90,
      fontFamily:"Sarabun",
    },
    inner:{
        backgroundColor:"#9BCCA5",
        height:700,
        width:'80%',
        transform:[{rotate:'65deg'}],
        top:-411,  
    },
    inner1:{
        backgroundColor:"#9BCCA5",
        height:700,
        width:'80%',
        transform:[{rotate:'245deg'}],
        top:-90,  
    },
    inner2:{
        backgroundColor:"#000000",
        height:200,
        width:"50%",
        top:-50,
    },
    innerinner:{
        backgroundColor:'#ffffff',
        height:700,
        top:80,
        width:'100%',
        borderRadius:40,

    },
    text:{
        fontSize:55,
        color:'#000000',
        fontFamily:'Sarabun',
        textAlign:'center',
        top:90,
    },
    // textmail:{
    //     fontFamily:'JosefinSans-SemiBold',
    //     color:'#000000',
    //     top:50,
    //     left:222,
    //     fontSize:15,
    //     padding:15,
    // },
    // input:{
    //     top:50,
    //     borderColor:'#9BCCA5',
    //     borderWidth:1,
    //     borderRadius:15,
    //     width:'70%',
    //     left:55,
    // },

    // button:{
    //     backgroundColor:"#9BCCA5",
    //     borderRadius:15,
    //     top:65,
    //     width: 146,
    //     height: 48,
    //     left: 120,
    //     alignItems:'center',

    // },
    // stylebutton:{
    //     fontFamily:'JosefinSans-SemiBold',
    //     fontSize:20,
    //     color:'#000000',
    //     textAlign:'center',
    //     top:9,
    //     alignSelf:'center',
    // },


    
     
  })