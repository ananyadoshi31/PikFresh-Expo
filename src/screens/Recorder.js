import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView,Pressable } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { Video } from 'expo-av';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

export default function Recorder({navigation,route}) {

  // const onPressHandlerbananaq1=()=>{
  //   navigation.navigate('Bananaq1')
    
  // }
  
  


  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [video, setVideo] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined || hasMicrophonePermission === undefined) {
    return <Text>Requestion permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted.</Text>
  }

  let recordVideo = () => {
    setIsRecording(true);
    let options = {
      quality: "1080p",
      maxDuration: 60,
      mute: false
    };

    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      setVideo(recordedVideo);
      setIsRecording(false);
    });
  };

  let stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };
  if(route.params.paramkeyapple=='apple')
  {
    const onPressHandlerrecordapple=()=>{
      navigation.navigate("Appleq1")
      
    }

    if (video) {
      let shareVideo = () => {
        shareAsync(video.uri).then(() => {
          setVideo(undefined);
        });
      };
  
      let saveVideo = () => {
        MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
          setVideo(undefined);
        });
      };
  
      return (
        <SafeAreaView style={styles.container}>
          <Video
            style={styles.video}
            source={{uri: video.uri}}
            useNativeControls
            resizeMode='contain'
            isLooping
          />
          <Pressable  onPress={shareVideo}
            style={styles.sharebtn}
          >
            <Text style={styles.btntxt}>SHARE</Text>
          </Pressable>
          {hasMediaLibraryPermission ? 
          <Pressable onPress={saveVideo}
            style={styles.savebtn}
          >
            <Text style={styles.btntxt}>SAVE</Text>
          </Pressable>
           : undefined}
          <Pressable  style={styles.discardbtn} onPress={() => setVideo(undefined)} >
            <Text style={styles.btntxt}>DISCARD</Text>
          </Pressable>
          <Pressable 
          style={styles.nextbtn}
            onPress={onPressHandlerrecordapple}
          >
            <Text style={styles.btntxt}>NEXT</Text></Pressable>
            {/* <Text>{route.params.paramkeyapple}</Text> */}
        </SafeAreaView>
      );
    }
  }
  else if(route.params.paramkeybanana=='banana')
  {
    const onPressHandlerrecordbanana=()=>{
      navigation.navigate("Bananaq1")
      
    }

    if (video) {
      let shareVideo = () => {
        shareAsync(video.uri).then(() => {
          setVideo(undefined);
        });
      };
  
      let saveVideo = () => {
        MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
          setVideo(undefined);
        });
      };
  
      return (
        <SafeAreaView style={styles.container}>
          <Video
            style={styles.video}
            source={{uri: video.uri}}
            useNativeControls
            resizeMode='contain'
            isLooping
          />
          <Pressable  onPress={shareVideo}
            style={styles.sharebtn}
          >
            <Text style={styles.btntxt}>SHARE</Text>
          </Pressable>
          {hasMediaLibraryPermission ? 
          <Pressable onPress={saveVideo}
            style={styles.savebtn}
          >
            <Text style={styles.btntxt}>SAVE</Text>
          </Pressable>
           : undefined}
          <Pressable  style={styles.discardbtn} onPress={() => setVideo(undefined)} >
            <Text style={styles.btntxt}>DISCARD</Text>
          </Pressable>
          <Pressable 
          style={styles.nextbtn}
            onPress={onPressHandlerrecordbanana}
          >
            <Text style={styles.btntxt}>NEXT</Text></Pressable>
            {/* <Text>{route.params.paramkeyapple}</Text> */}
        </SafeAreaView>
      );
    }
  }
  

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title={isRecording ? "Stop Recording" : "Record Video"} onPress={isRecording ? stopRecording : recordVideo} />
        
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end"
  },
  video: {
    flex: 1,
    alignSelf: "stretch"
  },
  nextbtn:{
    backgroundColor:'green',
    width:120,
    height:40,
    left:125,
    bottom:40,
  },
  discardbtn:{
    backgroundColor:'red',
    width:120,
    height:40,
    right:125,
  },
  savebtn:{
    backgroundColor:'blue',
    width:120,
    height:40,
    right:125,
    bottom:25,
  },
  sharebtn:{
    backgroundColor:'blue',
    width:120,
    height:40,
    left:125,
    bottom:-15,
  },
  btntxt:{
    fontSize:20,
    color:'#ffffff',
    padding:5,
    textAlign:'center',
  }
});