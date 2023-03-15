import { View, Text, Alert,StyleSheet,Image } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useFonts } from 'expo-font';

const ReportApple = ({route}) => {


  const [loaded]=useFonts({
    
    OleoScriptRegular:require('../../assets/fonts/OleoScript-Regular.ttf'),
    BreeSerifRegular:require('../../assets/fonts/BreeSerif-Regular.ttf'),
    Barlow:require('../../assets/fonts/BarlowCondensed-Regular.ttf'),
  });
  

  if(!loaded){
    return null;
  }
        if(route.params.paramKey7=='Soft')
        {
            if(route.params.paramKey8=='Red'|| route.params.paramKey8=='DarkRed')
            {
                if(route.params.paramKey9=='LessThanHalf' || route.params.paramKey9=='MoreThanHalf' || route.params.paramKey9=='NoPatch')
                {
                    if(route.params.paramKey10=='NoSmell')
                    {
                        return(
                            <View style={styles.container}>
                            <View style={[styles.card, styles.shadowProp]}>  
                              <Text style={styles.text}>Report</Text>
                              <Image style = {styles.photo} source = {require('../../assets/apple_soft.jpg')} />
                              <View style={styles.boxcontent}>
                                <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                                <Text style={styles.reporttxt}>Not Recommended to buy - Adulterated!</Text>
                                <Text style={styles.reporttxt}>Expected Survival: 1 week</Text>
                                <Text style={styles.reporttxt}>Refrigerate: Yes</Text>
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
                              <Image style = {styles.photo} source = {require('../../assets/apple_soft.jpg')} />
                              <View style={styles.boxcontent}>
                                <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                                <Text style={styles.reporttxt}>Not Recommended to buy!</Text>
                                <Text style={styles.reporttxt}>Expected Survival: 1 week</Text>
                                <Text style={styles.reporttxt}>Refrigerate: Yes</Text>
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
                              <Image style = {styles.photo_stripped_soft} source = {require('../../assets/stripped_soft.png')} />
                              <View style={styles.boxcontent}>
                                <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                                <Text style={styles.reporttxt}>Not Recommended to buy!</Text>
                                <Text style={styles.reporttxt}>Expected Survival: 1 week</Text>
                                <Text style={styles.reporttxt}>Refrigerate: Yes</Text>
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
            if(route.params.paramKey8=='Red')
            {
              if(route.params.paramKey9=='LessThanHalf')
              {
                if(route.params.paramKey10=='YesSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo} source = {require('../../assets/res_less_less.png')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE </Text>
                        <Text style={styles.reporttxt}>Recommended to buy!</Text>
                        <Text style={styles.reporttxt}>
                        Hard and crisp with yellow flesh and an exotic sweet flavor.
                        Good for eating and cooking.
                        </Text>
                        <Text style={styles.reporttxt}>Expected Survival: 1 month</Text>
                        <Text style={styles.reporttxt}>Refrigerate: Yes (for longer survival)</Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
                else if(route.params.paramKey10=='NoSmell') 
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo} source = {require('../../assets/res_less_less.png')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Might be adulterated!</Text>
                        <Text style={styles.reporttxt}>
                        Hard and crisp with yellow flesh.
                        </Text>
                        <Text style={styles.reporttxt}>Expected Survival: 1 month</Text>
                        <Text style={styles.reporttxt}>Refrigerate: Yes(for longer survival)</Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
              }
              else if(route.params.paramKey9=='MoreThanHalf')
              {
                if(route.params.paramKey10=='YesSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo} source = {require('../../assets/red_more.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Recommended to buy!</Text>
                        <Text style={styles.reporttxt}>
                        Savory, sweet tasting, with a slight tart balance and rich overtones.
                        Amazingly slow to turn brown when cut.
                        </Text>
                        <Text style={styles.reporttxt}>Expected Survival: 3 weeks</Text>
                        <Text style={styles.reporttxt}>Refrigerate: Yes(for longer survival)</Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
                else if(route.params.paramKey10=='NoSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo} source = {require('../../assets/red_more.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Might be adulterated!</Text>
                        <Text style={styles.reporttxt}>
                        Slight tart balance and rich overtones.
                        Slow to turn brown when cut.
                        </Text>
                        <Text style={styles.reporttxt}>Expected Survival: 3 weeks</Text>
                        <Text style={styles.reporttxt}>Refrigerate:Yes</Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
                
              }
              else if(route.params.paramKey9=='NoPatch')
              {
                if(route.params.paramKey10=='YesSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo} source = {require('../../assets/red_less.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Recommended to buy!</Text>
                        <Text style={styles.reporttxt}>
                        Juicy and sweet with deep red coloration.
                        </Text>
                        <Text style={styles.reporttxt}>Expected Survival:- 1-2 weeks</Text>
                        <Text style={styles.reporttxt}>
                        Refrigerate: As soon as possible to slow ripening and maintain their crunchy texture and sweet, tangy flavor.
                         </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
                else if(route.params.paramKey10=='NoSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo} source = {require('../../assets/red_less.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Might be adulterated!</Text>
                        <Text style={styles.reporttxt}>
                        Juicy and sweet with deep red coloration.
                        </Text>
                        <Text style={styles.reporttxt}>Expected Survival:- 1-2 weeks</Text>
                        <Text style={styles.reporttxt}>
                        Refrigerate: Yes
                         </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
              }
            }
            else if(route.params.paramKey8=='DarkRed')
            {
              if(route.params.paramKey9=='LessThanHalf')
              {
                if(route.params.paramKey10=='YesSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_darkred_less} source = {require('../../assets/darkred_less.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Recommended to buy!</Text>
                        <Text style={styles.reporttxt}>
                        Intensely sweet, firm and juicy flesh.
                        Fruit may be prone to russeting.
                        </Text>
                        <Text style={styles.reporttxt}>Expected Survival:- 1-2 months</Text>
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes(For longer survival)
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
                else if(route.params.paramKey10=='NoSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_darkred_less} source = {require('../../assets/darkred_less.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Might be adulterated!</Text>
                        <Text style={styles.reporttxt}>
                        Intensely firm and juicy flesh.
                        Fruit may be prone to russeting.
                        </Text>
                        <Text style={styles.reporttxt}>Expected Survival:- 1-2 months</Text>
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
              }
              else if(route.params.paramKey9=='MoreThanHalf')
              {
                if(route.params.paramKey10=='YesSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_darkred_more}source = {require('../../assets/darkred_more.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Recommended to buy!</Text>
                        <Text style={styles.reporttxt}>
                        Medium sized red fruit with a well-balanced flavor that is pleasantly tart.
                        </Text>
                        <Text style={styles.reporttxt}>Expected Survival:- 1-2 months</Text>
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes(For longer survival)
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
                else if(route.params.paramKey10=='NoSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_darkred_more} source = {require('../../assets/darkred_more.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Might be adulterated!</Text>
                        <Text style={styles.reporttxt}>
                        Medium sized red fruit with a well-balanced flavor that is pleasantly tart.
                        </Text>
                        <Text style={styles.reporttxt}>Expected Survival:- 1-2 months</Text>
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
              }
              else if(route.params.paramKey9=='NoPatch')
              {
                if(route.params.paramKey10=='YesSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_darkred} source = {require('../../assets/darkred_no.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Might be adulterated!</Text>
                        <Text style={styles.reporttxt}>
                        Not recommended to buy
                        </Text>
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
                else if(route.params.paramKey10=='NoSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_darkred} source = {require('../../assets/darkred_no.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Adulterated!</Text>
                        <Text style={styles.reporttxt}>
                        Not recommended to buy
                        </Text>
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
              }
            }
            else if(route.params.paramKey8=='Striped')
            {
              if(route.params.paramKey9=='LessThanHalf')
              {
                if(route.params.paramKey10=='YesSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_stripped_low} source = {require('../../assets/stripped_less.png')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Recommended to buy!</Text>
                        <Text style={styles.reporttxt}>
                        Large, russeted fruit with a rich, nutty flavor.
                        Best for fresh eating or sauce.
                        </Text>
                        <Text style={styles.reporttxt}>
                            Expected Survival: 1-2 weeks
                        </Text>   
                        
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes(For longer Survival)
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
                else if(route.params.paramKey10=='NoSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_stripped_low} source = {require('../../assets/banana.jpeg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Might be adulterated!</Text>
                        <Text style={styles.reporttxt}>
                            Large, russeted fruit with a rich, nutty flavor.
                        </Text>
                        <Text style={styles.reporttxt}>
                            Expected Survival: 1-2 weeks
                        </Text>   
                        
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
              }
              else if(route.params.paramKey9=='MoreThanHalf')
              {
                if(route.params.paramKey10=='YesSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_stripped_more} source = {require('../../assets/stripped_more.png')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Recommended to buy!</Text>
                        <Text style={styles.reporttxt}>
                            Juicy flesh and a mild sweet flavor.
                            Good for fresh eating.
                        </Text>
                        <Text style={styles.reporttxt}>
                            Expected Survival: 1-2 weeks
                        </Text>   
                        
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes(For longer Survival)
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
                else if(route.params.paramKey10=='NoSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_stripped_more} source = {require('../../assets/stripped_more.png')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Might be adulterated!</Text>
                        <Text style={styles.reporttxt}>
                        Juicy flesh and a mild sweet flavor.
                        </Text> 
                        <Text style={styles.reporttxt}>
                            Expected Survival: 1-2 weeks
                        </Text>   
                        
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
              }
              else if(route.params.paramKey9=='NoPatch')
              {
                if(route.params.paramKey10=='YesSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_stripped_no} source = {require('../../assets/stripped_no.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Recommended to buy!</Text>
                        <Text style={styles.reporttxt}>
                            Bright red apple with soft, juicy flesh and a slightly tart flavor.
                        </Text>
                        <Text style={styles.reporttxt}>
                            Expected Survival: 1 week
                        </Text>   
                        
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes(For longer Survival)
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
                else if(route.params.paramKey10=='NoSmell')
                {
                  return(
                    <View style={styles.container}>
                    <View style={[styles.card, styles.shadowProp]}>  
                      <Text style={styles.text}>Report</Text>
                      <Image style = {styles.photo_stripped_no} source = {require('../../assets/stripped_no.jpg')} />
                      <View style={styles.boxcontent}>
                        <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                        <Text style={styles.reporttxt}>Might be adulterated!</Text> 
                      <Text style={styles.reporttxt}>
                        Bright red apple with soft, juicy flesh and a slightly tart flavor.
                      </Text> 
                        <Text style={styles.reporttxt}>
                            Expected Survival: 1 week
                        </Text>      
                        <Text style={styles.reporttxt}>
                            Refrigerate: Yes
                        </Text>
                      </View> 
                    </View>
                    </View>
                  )
                }
              }
            }
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
      top:30,
      fontFamily:'BreeSerifRegular'
      // marginBottom: 13,  
  },
      boxcontent:{
      width:"80%",
      backgroundColor:"#9bcca5",
      height:400,
      top:180,
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
    width: "50%",
    height: "200%",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    top:120,
    },
    reporttxt:{
      color:'#000000',
      fontSize:25,
      textAlign:'left',
      padding:10,
      bottom:40,
      fontFamily:'Barlow'
    },
    photo_stripped_soft:{
      width: "70%",
    height: "200%",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    top:120,
    left:50,
    },
    photo_darkred_less:{
      width: "100%",
    height: "200%",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    top:120,
    // left:50,
    },
    photo_darkred_more:{
      width: "100%",
      height: "200%",
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      top:120,
      // left:50,
    },
    photo_stripped_low:{
      width: "80%",
      height: "210%",
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      top:120,
      // left:50,
    },
    photo_darkred:{
      width: "70%",
      height: "200%",
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      top:120,
      // left:50,
    },
    photo_stripped_no:{
      width: "80%",
      height: "190%",
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      top:120,
      // left:50,
    },
    photo_stripped_more:{
      width: "80%",
      height: "190%",
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf:'center',
      top:120,
      // left:50,
    }

})
export default ReportApple