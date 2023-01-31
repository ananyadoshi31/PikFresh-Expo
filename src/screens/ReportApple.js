import { View, Text, Alert,StyleSheet,Image } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'


const ReportApple = ({route}) => {

        if(route.params.paramKey7=='Soft')
        {
            if(route.params.paramKey8=='Red'|| route.params.paramKey8=='DarkRed')
            {
                if(route.params.paramKey9=='LessThanHalf' || route.params.paramKey9=='MoreThanHalf' || route.params.paramKey9=='NoPath')
                {
                    if(route.params.paramKey10=='NoSmell')
                    {
                        return(
                            <View style={styles.container}>
                            <View style={[styles.card, styles.shadowProp]}>  
                              <Text style={styles.text}>Report</Text>
                              <Image style = {styles.photo} source = {require('../../assets/banana.jpeg')} />
                              <View style={styles.boxcontent}>
                                <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                                <Text style={styles.reporttxt}>Not Recommended to buy - ADULETRATED</Text>
                                <Text style={styles.reporttxt}>Expected Survival: 1 WEEK</Text>
                                <Text style={styles.reporttxt}>Refrigerate: YES</Text>
                              </View>
                            </View>
                            </View>
                          )
                    }
                    else if(route.params.paramKey10=='YesSmell')
                    {
                        return(
                            <View style={styles.container}>
                            <View style={[styles.card, styles.shadowProp]}>  
                              <Text style={styles.text}>Report</Text>
                              <Image style = {styles.photo} source = {require('../../assets/banana.jpeg')} />
                              <View style={styles.boxcontent}>
                                <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                                <Text style={styles.reporttxt}>Not Recommended to buy - Might be ADULETRATED</Text>
                                <Text style={styles.reporttxt}>Expected Survival: 1 WEEK</Text>
                                <Text style={styles.reporttxt}>Refrigerate: YES</Text>
                              </View>
                            </View>
                            </View>
                          )
                    }
                    
                }
            }
            else if(route.params.paramKey8=='Striped')
            {
                if(route.params.paramKey9=='LessThanHalf' || route.params.paramKey9=='MoreThanHalf' || route.params.paramKey9=='NoPath')
                {
                    if(route.params.paramKey10=='YesSmell' || route.params.paramKey10=='NoSmell')
                    {
                        return(
                            <View style={styles.container}>
                            <View style={[styles.card, styles.shadowProp]}>  
                              <Text style={styles.text}>Report</Text>
                              <Image style = {styles.photo} source = {require('../../assets/banana.jpeg')} />
                              <View style={styles.boxcontent}>
                                <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                                <Text style={styles.reporttxt}>Not Recommended to buy</Text>
                                <Text style={styles.reporttxt}>Expected Survival: 1 WEEK</Text>
                                <Text style={styles.reporttxt}>Refrigerate: YES</Text>
                              </View>
                            </View>
                            </View>
                          )
                    }

                    
                }
            }
        }
        else if(route.params.paramKey7=='Hard'|| route.params.paramKey7=='Dent')
        {

        }

    
  return (
    <View>
        
      <Text style={{color:'black'}}>{route.params.paramKey7}</Text>
      <Text style={{color:'black'}}>{route.params.paramKey8}</Text>
      <Text style={{color:'black'}}>{route.params.paramKey9}</Text>
      <Text style={{color:'black'}}>{route.params.paramKey10}</Text>
      <Text>generate report</Text>

    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#ffffff",
  },
  
  card: {  
      backgroundColor: '#9bcca5',  
      borderRadius: 8,  
      width: '100%',  
      marginVertical: 10, 
      height:100, 
      marginTop:-5

    },  
    shadowProp: {  
      // shadowOffset: {width: -5, height: 4},  
      // shadowColor: '#000000',  
      shadowOpacity: 0.2,  
       shadowRadius: 3,  
      shadowColor: '#000000',  
      elevation: 30, 
      width:"100%", 
      
    },  
    text:{
      fontSize:28,
      color:'#000000',
      fontFamily:'JosefinSans-SemiBold',
      textAlign:'center',
      padding:10,
      top:30
      // marginBottom: 13,  
  },
      boxcontent:{
      width:"80%",
      backgroundColor:"#9bcca5",
      height:350,
      top:200,
      borderRadius:30,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      
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
    photo:{
    width: "70%",
    height: "170%",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    top:130,
    },
    reporttxt:{
      color:'#000000',
      fontSize:24,
      textAlign:'center',
      padding:10,
      bottom:40,
    },

})
export default ReportApple