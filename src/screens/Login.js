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

  } from 'react-native';
// import { TouchableOpacity } from "react-native-gesture-handler";
import { firebase } from '../../config';
import { useFonts } from 'expo-font';
// import { useNavigation } from "@react-navigation/native";


export default function Login({navigation})
{
    

    const onPressHandlerSignUp=()=>{
        navigation.navigate('CreateAccount')
        
      }

      const onPressHandlerDash=()=>{
        navigation.navigate('Dashboard')
      }
    //   const navigation = useNavigation()
      const [email,setEmail] = useState('')
      const[password,setPassword]=useState('')
      const loginUser = async (email,password)=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
            onPress={onPressHandlerDash}
        }catch(error){
            alert(error.message)
        }
      }

      const forgotpass =()=>{
        firebase.auth().sendPasswordResetEmail(email)
        .then(()=>{
            alert("Password reset email has been sent")
        }).catch((error)=>{
            alert(error)
        })
      }

      const [loaded]=useFonts({
        OleoScriptRegular:require('../../assets/fonts/OleoScript-Regular.ttf'),
        BreeSerifRegular:require('../../assets/fonts/BreeSerif-Regular.ttf'),
      });
      
    
      if(!loaded){
        return null;
      }
return (
 
      <View style={styles.container}>
        <Image style = {styles.loginphoto} source = {require('../../assets/1.png')} />
        <View style={styles.outer}>
        <Text style={styles.text}>
          Login to your Account
          </Text>
        </View>
        <View style={styles.inner}>
            <Text style={styles.credential}>
                Email:
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={(email)=>setEmail(email)}
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Text style={styles.credential}>
                Password:
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={(password)=>setPassword(password)}
                placeholder="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            <TouchableOpacity
               onPress={()=>{
                forgotpass()
               }}  
            >
                <Text 
                    style={{
                        fontSize:15,
                        fontFamily:'BreeSerifRegular',
                        color:'#000000',
                        left:45,
                        bottom:-20

                    }}
                >
                    Forgot Password
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginbutton}
                onPress={()=>loginUser(email,password)}
                // onPress={onPressHandlerDash}
            >
                <Text style={styles.loginbuttontext}>Login</Text>
            </TouchableOpacity>
            <Text 
                style={{
                    fontSize:15,
                    fontFamily:'BreeSerifRegular',
                    color:'#000000',
                    bottom:-55,
                    textAlign:'center',
                    left:-40,

                  }}
            >
                New User? 
            </Text>
            <Pressable 
                onPress={onPressHandlerSignUp} 
            >
                <Text style={styles.text1}>Sign Up</Text>
            </Pressable>
        </View>
          
       </View>
      
       
    )
}

  const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'#2b463c'


   },
   outer:{
    backgroundColor:'#D9D9D9',
    height:568,
    top:320,
    borderRadius:40,
    width:'100%'
   },
   inner:{
    backgroundColor:'#ffffff',
    height:514,
    bottom:180,
    borderRadius:40,
    width:'100%'
   },
   text:{
    fontSize:28,
    color:'#000000',
    fontFamily:'BreeSerifRegular',
    textAlign:'center',
    top:10,
   },
   loginphoto:
   {
    width: 680,
    height: 469,
    left: -130,
    top: -40,
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
    padding:20,
    left:25,
    fontSize:25,
    color:'#000000',
    fontFamily:'BreeSerifRegular',
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
    fontFamily:'BreeSerifRegular',
    top:7
   },
   text1:{
    color:"#000000",
    fontFamily:'BreeSerifRegular',
    textAlign:'center',
    top:32,
    left:40,
},
  })