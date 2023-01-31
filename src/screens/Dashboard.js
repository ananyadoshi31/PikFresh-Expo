import { View, Text,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import { firebase } from '../../config';


const Dashboard=()=> {

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
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>
            Hello, {name.name}
        </Text>
        <TouchableOpacity 
            onPress={()=>{firebase.auth().signOut()}}
            style={styles.button}
            >
                <Text style={{fontSize:22, fontWeight:'bold'}}>Sign out</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        marginTop:100,
    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#9BCCA5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }
})

export default Dashboard;