import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from './authComponent/Header'
import InputField from './authComponent/InputField'
import Checkbox from './authComponent/checkBox'
import Submitbutton from './authComponent/submitButton'
import OrSeperator from './authComponent/orSeperator'
import AuthLinks from './authComponent/authLinks'
import { router } from 'expo-router'

export default function Register() {
  return (
    <View style={{paddingVertical:4, paddingHorizontal:6, backgroundColor:'white', flex:1}}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={false} style={{paddingBottom:22}}>
        <Header title="Signup" subtitle="Welcome to the signup screen , please create an account and get started"/>
        <View style={{gap:13, marginTop:2}}>
          <InputField name="Username" />
          <InputField name="Email" />
          <InputField name="Password" />
        </View>
        <Checkbox />
        <Submitbutton message="Register Now" />
        <OrSeperator/>
        <AuthLinks />
        <View style={{flexDirection:'row', gap:12 , justifyContent:'center', paddingTop:8, paddingBottom:12}}>
          <Text style={{fontSize:16, fontWeight:'400', color:'#4e4e4ea4'}}>
            Already have an account ? 
          </Text>
          <Text
           onPress={()=>router.push('/login')}
           style={{fontSize:16, fontWeight:'600', color:'#0a45d0cb'}}>Login</Text>
        </View>
      </ScrollView>
    </View>
  );
}