import { View, Text, Alert,StyleSheet,Image } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

// global.var1;
const ReportBanana = ({route}) => {

        if(route.params.paramKey4=='Black' || route.params.paramKey4=='Brown')
        {
            if(route.params.paramKey5=='darkyellow')
            {
                if(route.params.paramKey6=='low' || route.params.paramKey6=='moderate')
                {
                    return(
                      <View style={styles.container}>
                      <View style={[styles.card, styles.shadowProp]}>  
                        <Text style={styles.text}>Report</Text>
                        <Image style = {styles.photo} source = {require('../../assets/banana.jpeg')} />
                        <View style={styles.boxcontent}>
                          <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                          <Text style={styles.reporttxt}>Quality: RIPE</Text>
                          <Text style={styles.reporttxt}>Expected Survival: 2-3 DAYS</Text>
                          <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                        </View>
                      </View>
                      </View>
                    )
                }
                else if(route.params.paramKey6=='high')
                {
                  return(
                    <View style={styles.container}>
                      <View style={[styles.card, styles.shadowProp]}>  
                        <Text style={styles.text}>Report</Text>
                        <Image style = {styles.photo} source = {require('../../assets/banana_overripe.png')} />
                        <View style={styles.boxcontent}>
                          <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                          <Text style={styles.reporttxt}>Quality: OVER RIPE</Text>
                          <Text style={styles.reporttxt}>Expected Survival: 0-1 DAYS</Text>
                          <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                        </View>
                      </View>
                      </View>
                  )
                }
            }
            else if(route.params.paramKey5=='green' || route.params.paramKey5=='greenishyellow')
            {
              if(route.params.paramKey6=='low' || route.params.paramKey6=='moderate' || route.params.paramKey6=='high')
              {
                return(
                  <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo} source = {require('../../assets/green_banana.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                        <Text style={styles.reporttxt}>Quality: UNRIPE</Text>
                        <Text style={styles.reporttxt}>Expected Survival: 3-4 DAYS</Text>
                        <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                      </View>
                    </View>
                    </View>
                )
              }
            }
            else if(route.params.paramKey5=='lemonyellow')
            {
              if(route.params.paramKey6=='low')
              {
                return(
                  <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo} source = {require('../../assets/lemonyellow_low.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                        <Text style={styles.reporttxt}>Quality: UNRIPE</Text>
                        <Text style={styles.reporttxt}>Expected Survival: 3-4 DAYS</Text>
                        <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                      </View>
                    </View>
                    </View>
                )
              }
              else if(route.params.paramKey6=='moderate')
              {
                return(
                  <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo} source = {require('../../assets/lemonyellow_moderate.png')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                        <Text style={styles.reporttxt}>Quality: RIPE</Text>
                        <Text style={styles.reporttxt}>Expected Survival: 2-3 DAYS</Text>
                        <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                      </View>
                    </View>
                    </View>
                )
              }
              else if(route.params.paramKey6=='high')
              {
                return(
                  <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo} source = {require('../../assets/banana_overripe.png')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                        <Text style={styles.reporttxt}>Quality: OVERRIPE</Text>
                        <Text style={styles.reporttxt}>Expected Survival: 0-1 DAYS</Text>
                        <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                      </View>
                    </View>
                    </View>
                )
              }
            }

    }
    else if(route.params.paramKey4=='Green')
        {
              return(
                <View style={styles.container}>
                  <View style={[styles.card, styles.shadowProp]}>  
                    <Text style={styles.text}>Report</Text>
                    <Image style = {styles.photo} source = {require('../../assets/banana.jpeg')} />
                    <View style={styles.boxcontent}>
                      <Text style={styles.reporttxt}>Fruit: BANANA</Text>
                      <Text style={styles.reporttxt}>Quality: ARTIFICIALLY RIPENED</Text>
                      <Text style={styles.reporttxt}>Expected Survival: 3-4 DAYS</Text>
                      <Text style={styles.reporttxt}>Refrigerate: NO</Text>
                    </View>
                  </View>
                  </View>
              )
        }
    
//   return (
//     <View>
        
//       <Text style={{color:'black'}}>{route.params.paramKey4}</Text>
//       <Text style={{color:'black'}}>{route.params.paramKey5}</Text>
//       <Text style={{color:'black'}}>{route.params.paramKey6}</Text>
//       <Pressable
//         onPress={ans}
//         style={{backgroundColor:'red'}}
//       >
//         <Text>generate report</Text>
//       </Pressable>
      
//     </View>
//   )
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
export default ReportBanana