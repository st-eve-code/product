import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function Header({title, subtitle} : any) {
  return (
    <View style={{paddingVertical:5, paddingHorizontal:6, paddingBottom:12}}>
      <View style={{width:40,height:40, borderRadius:50, backgroundColor:'#84848418', alignItems:'center'}}>
        <Ionicons
            name="arrow-back" color={'#1a1a1ab9'} size={24}
            style={{paddingTop:8}}
        />
      </View>
      <View style={{alignItems:'center', width:'100%', gap:13}}>
        <Text style={{fontSize:28, fontWeight:'700', color:'#0f0f0fd6'}}>{title}</Text>
        <Text style={{fontSize:16, fontWeight:'400', color: '#8d8d8dff', textAlign:'center'}}>{subtitle}</Text>
      </View>
    </View>
  )
}