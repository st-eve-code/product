import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Submitbutton({message}: any) {
  return (
    <View style={{paddingVertical:12, paddingHorizontal: 5}}>
      <TouchableOpacity style={{backgroundColor:'rgba(48, 94, 219, 1)', width:'100%', height:60, borderRadius:15, alignItems:'center'}}>
        <Text style={{fontSize:20, color:'white', fontWeight:'400', textAlign:'center', paddingVertical:13}}>
            {message}
        </Text>
      </TouchableOpacity>
    </View>
  )
}