import React from 'react'
import { TextInput, View } from 'react-native'

export default function InputField({name}: any) {
  return (
    <View style={{paddingHorizontal:11, paddingVertical:6}}>
      <TextInput placeholder={name} style={{borderColor:'#d6d6d6c1', backgroundColor:'#e9e9e975', borderWidth:1, borderRadius:12, height: 55, paddingLeft:10}} />
    </View>
  )
}