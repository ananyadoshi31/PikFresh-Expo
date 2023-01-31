

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SelectFruit = ({navigation}) => {
const recordVideoapple=()=>{
  navigation.navigate("Recorder",{
    paramkeyapple:selectapple,  
  },
    )
};
const recordVideobanana=()=>{
  navigation.navigate("Recorder",{
    
    paramkeybanana:selectbanana
  },
    )
};
const selectapple="apple"
const selectbanana="banana"

  return (
    
 
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={()=>recordVideoapple()}>
          <Text style={styles.text}>
            Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Mango
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}  onPress={()=>recordVideobanana()} >
          <Text style={styles.text}>
            Banana
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Tomato
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Orange
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Banana
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Watermelon
          </Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    header:{
        fontSize:28,
        color:'#ffffffff',
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
        padding:10,
        // marginBottom: 13,  
    },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#6CA55D',
  },
  item: {
    margin: 10,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    height: 106,
    width:316,
    borderRadius:15,
  },
  text: {
    color: '#000000',
    margin: 10,
    fontSize:28,
    fontFamily:'JosefinSans-SemiBold',
    textAlign:'center',

  },
  card: {  
    backgroundColor: '#6CA55D',  
    borderRadius: 8,  
    width: '100%',  
    marginVertical: 10, 
    width:360,
    height:73, 
   

  },  
  shadowProp: {  
    // shadowOffset: {width: -5, height: 4},  
    // shadowColor: '#000000',  
    // shadowOpacity: 0.2,  
    // shadowRadius: 3,  
    shadowColor: '#000000',  
    elevation: 30, 
    width:"100%", 
    //alignSelf:'top',
  }, 
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#6CA55D',  
  } 
});

export default SelectFruit;