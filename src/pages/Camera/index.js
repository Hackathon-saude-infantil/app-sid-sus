import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Modal, Image, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';

import Styles from './styles.js'
import { useNavigation } from '@react-navigation/native'

export default function App() {
  const camRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function takePicture(){
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpen(true);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={camRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            {/* <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text> */}
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={{ 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        margin: 20,
        borderRadius: 10, 
        height:50,
      }} onPress={takePicture} >

      <FontAwesome name="camera" size={23} color="#fff"  />

      </TouchableOpacity>

      {
        capturedPhoto && 
        <Modal 
          animationType="slide"
          transparent={false}
          visible={open}
        >
          <View
            style={{ 
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
            }}
          >
              <TouchableOpacity style={{marginLeft: 'auto',marginRight: 0}} onPress={()=> setOpen(false)} >
                <FontAwesome name="window-close" size={50} color="#ff0000" />
              </TouchableOpacity>

              <Image 
                style={{ width: '100%', height:'80%', borderRadius: 20}}
                source={{uri: capturedPhoto}}
              >
              </Image>

              <TouchableOpacity style={{marginLeft: 'auto',marginRight: 0}} onPress={() => {
                 setOpen(false);
                navigation.navigate('Info')
                }}>
                <Text style={Styles.button}>Confirmar</Text>
              </TouchableOpacity>
          </View>
        </Modal>
      }
    </SafeAreaView>
  );
}