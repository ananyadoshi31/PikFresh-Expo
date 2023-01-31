// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect, Suspense} from 'react';
// import type {Node} from 'react';
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground,

} from 'react-native';

//import AnnuButton from './src/utils/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
//import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './src/screens/Home';
import Main from './src/screens/Main';
import 'react-native-gesture-handler';
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';
import SelectFruit from './src/screens/SelectFruit';
import ForgotPassword from './src/screens/ForgotPassword';
import Dashboard from './src/screens/Dashboard';
import ReportBanana from './src/screens/ReportBanana';
import ReportApple from './src/screens/ReportApple';
// import Verification from './src/screens/Verification';
// import NewPassword from './src/screens/NewPassword';
import Recorder from './src/screens/Recorder';
import Appleq1 from './src/screens/Appleq1';
import Appleq2 from './src/screens/Appleq2';
import Appleq3 from './src/screens/Appleq3';
import Appleq4 from './src/screens/Appleq4';
// import Appleq2 from './src/screens/questions/Appleq2';
// import Appleq3 from './src/screens/questions/Appleq3';
// import Appleq4 from './src/screens/questions/Appleq4';
import Bananaq1 from './src/screens/Bananaq1';
import Bananaq2 from './src/screens/Bananaq2';
import Bananaq3 from './src/screens/Bananaq3';
import Support from './src/screens/Support';
import { firebase } from './config';
// const Tab=createBottomTabNavigator();
// const Tab=createMaterialBottomTabNavigator();
// const Tab=createMaterialTopTabNavigator();
const Stack=createStackNavigator();
//const Drawer = createDrawerNavigator();
function App()
{
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

 function onAuthStateChanged(user)
 {
  setUser(user);
  if (initializing) setInitializing(false);
 }

 useEffect(()=>{
  const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber;
 }, []);

 if (initializing) return null;

if(!user)
{
  return(

    <NavigationContainer >
      <Stack.Navigator

        initialRouteName='Login'

        screenOptions={{
          headerShown:true,
          swipeEnabled:true,
          gestureEnabled:true,
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:'#0080ff'
          },
          headerTintColor:'#ffffff',
          headerTitleStyle:{
            fontSize:25,
            fontWeight:'bold',
          }
        }}
      >
      {/* <AnnuButton
        onPressFunction={onPressHandler}
        title={submitted?'clear':'submit'}
        color={'#00ff00'}
      />

      <AnnuButton
        onPressFunction={()=> {}}
        title={'Test'}
        color={'#ff00ff'}
        style={{margin:10}}
      />
        <Pressable
        onPress={onPressHandler}
        hitSlop={{top:10,bottom:10,right:10,left:10}}
        android_ripple={{color:'#771'}}
        style={({pressed}) =>[
          {backgroundColor:pressed?'#dddddd':'#005997'},
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'clear':'submit'}
        </Text>
      </Pressable> */}
      
        <Stack.Screen
          name="Dashboard"
          component ={Dashboard}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Support"
          component ={Support}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="SelectFruit"
          component ={SelectFruit}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Login"
          component ={Login}
          options={{
            headerShown:false

          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component ={CreateAccount}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component ={ForgotPassword}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Recorder"
          component ={Recorder}
          options={{
            headerShown:false
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>

);
}
return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
           name="Main"
           component ={Main}
           options={{
           headerShown:false
          }}
    />
    <Stack.Screen
          name="SelectFruit"
          component ={SelectFruit}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Support"
          component ={Support}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Recorder"
          component ={Recorder}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component ={ForgotPassword}
          options={{
            headerShown:false
          }}
        />
        {/* <Stack.Screen
          name="Appleq1"
          component ={Appleq1}
          options={{
            headerShown:false
          }}
        /> */}
        <Stack.Screen
          name="Bananaq1"
          component ={Bananaq1}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Bananaq2"
          component ={Bananaq2}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Bananaq3"
          component ={Bananaq3}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="ReportBanana"
          component ={ReportBanana}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="ReportApple"
          component ={ReportApple}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Appleq1"
          component ={Appleq1}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Appleq2"
          component ={Appleq2}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Appleq3"
          component ={Appleq3}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Appleq4"
          component ={Appleq4}
          options={{
            headerShown:false
          }}
        />
    </Stack.Navigator>
  </NavigationContainer>
)
}



export default App;