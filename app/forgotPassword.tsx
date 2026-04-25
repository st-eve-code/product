import React from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Header from './authComponent/Header'
import { router } from 'expo-router'

export default function forgotPassword() {
    return (
        <View style={{paddingVertical:24, paddingHorizontal:6, backgroundColor:'white', flex:1}}>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={false} style={{paddingBottom:22}}>
            <Header title="Signup" subtitle="Welcome to the signup screen , please create an account and get started"/>
            <View style={{gap:13, marginTop:12}}>
              <View style={{paddingHorizontal:11, paddingVertical:6}}>
                <TextInput placeholder="Email" style={{borderColor:'#d6d6d6c1', backgroundColor:'#e9e9e975', borderWidth:1, borderRadius:12, height: 55, paddingLeft:10}} />
              </View>
            </View>
            <View style={{paddingVertical:22, paddingHorizontal: 5}}>
              <TouchableOpacity style={{backgroundColor:'rgba(48, 94, 219, 1)', width:'100%', height:60, borderRadius:15, alignItems:'center'}}>
                <Text style={{fontSize:18, color:'white', fontWeight:'400', textAlign:'center', paddingVertical:16}}>
                    Send Code
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', gap:12 , justifyContent:'center', paddingVertical:52}}>
              <Text style={{fontSize:16, fontWeight:'400', color:'#4e4e4ea4'}}>
                Go back To  
              </Text>
              <Text
               onPress={()=>router.push('/login')}
               style={{fontSize:16, fontWeight:'600', color:'#0a45d0cb'}}>Login</Text>
            </View>
          </ScrollView>
        </View>
      );
}