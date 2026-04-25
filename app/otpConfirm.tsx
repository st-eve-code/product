import React from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Header from './authComponent/Header'
import { router } from 'expo-router'

export default function OtpConfirm() {
  return (
        <View style={{paddingVertical:24, paddingHorizontal:6, backgroundColor:'white', flex:1}}>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={false} style={{paddingBottom:20}}>
            <Header title="Enter Your OTP" subtitle="Please kindly fill in the boxes with the correct otp codes !"/>
            <View style={{gap:13, marginTop:12}}>
            <View style={{paddingHorizontal:11, paddingVertical:12, flexDirection:'row', justifyContent:'center', gap:35}}>
                <TextInput placeholder="X" style={{borderColor:'#d6d6d6c1', backgroundColor:'#e9e9e975', borderWidth:1, borderRadius:12, height: 55, width:60, textAlign:'center', justifyContent:'center', fontSize:20, fontWeight:'600', color:'gray'}} />
                <TextInput placeholder="X" style={{borderColor:'#d6d6d6c1', backgroundColor:'#e9e9e975', borderWidth:1, borderRadius:12, height: 55, width:60, textAlign:'center', justifyContent:'center', fontSize:20, fontWeight:'600', color:'gray'}} />
                <TextInput placeholder="X" style={{borderColor:'#d6d6d6c1', backgroundColor:'#e9e9e975', borderWidth:1, borderRadius:12, height: 55, width:60, textAlign:'center', justifyContent:'center', fontSize:20, fontWeight:'600', color:'gray'}} />
                <TextInput placeholder="X" style={{borderColor:'#d6d6d6c1', backgroundColor:'#e9e9e975', borderWidth:1, borderRadius:12, height: 55, width:60, textAlign:'center', justifyContent:'center', fontSize:20, fontWeight:'600', color:'gray'}} />
            </View>
            </View>
            <View style={{paddingVertical:22, paddingHorizontal: 5}}>
            <TouchableOpacity style={{backgroundColor:'rgba(48, 94, 219, 1)', width:'100%', height:60, borderRadius:15, alignItems:'center'}}>
                <Text style={{fontSize:18, color:'white', fontWeight:'400', textAlign:'center', paddingVertical:16}}>
                    Verify
                </Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    );
}