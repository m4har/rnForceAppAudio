import React,{useEffect} from 'react'
import {View, Text, DeviceEventEmitter, Slider} from 'react-native'
import firebase from 'react-native-firebase'

const Home = (props) => {
  useEffect(()=>{
    DeviceEventEmitter.addListener('appInvoked', (data) => {
	    const { route } = data;
      props.navigation.navigate(route);
  });
  getToken()
  },[])
  const getToken =  async () => {
    const fcmToken = await firebase.messaging().getToken();
      console.log({fcmToken})
  }
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>is Home</Text>
    </View>
  )
}

export default Home