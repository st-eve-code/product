import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'


export default function AuthLinks() {
  
  return (
    <View style={{flexDirection:'row', justifyContent:'center', gap:24, alignItems:'center', paddingVertical:20}}>
        <TouchableOpacity style={{width:60,height:60, borderRadius:50, backgroundColor:'#b4b4b41c', alignItems:'center'}}>
            <Image source={require('@/assets/icons/google.png')} style={{width:35, height:35, top:10}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{width:60,height:60, borderRadius:50, backgroundColor:'#b4b4b41c', alignItems:'center'}}>
            <Image source={require('@/assets/icons/face.png')} style={{width:42, height:42, top:10}}/>
        </TouchableOpacity>
    </View>
  )
}