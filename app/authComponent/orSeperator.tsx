import { View, Text } from 'react-native'
import React from 'react'

export default function OrSeperator() {
  return (
    <View style={{flexDirection:'row', gap:5, justifyContent:'center', alignItems:'center', paddingHorizontal:6, paddingVertical:16}}>
        <View style={{backgroundColor:'#9e9e9e8f', width:"45%", height:2, borderRadius:15, top:1}}></View>
        <Text style={{fontSize:15, fontWeight:'400'}}>Or</Text>
        <View style={{backgroundColor:'#9e9e9e8f', width:"45%", height:2, borderRadius:15, top:1}}></View>
    </View>
  )
}