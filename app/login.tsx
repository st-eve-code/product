import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from './authComponent/Header'
import InputField from './authComponent/InputField'
import Submitbutton from './authComponent/submitButton'
import OrSeperator from './authComponent/orSeperator'
import AuthLinks from './authComponent/authLinks'
import { router } from 'expo-router'

export default function login() {
   return (
      <View style={{paddingVertical:4, paddingHorizontal:6, backgroundColor:'white', flex:1}}>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={false} style={{paddingBottom:22}}>
          <Header title="Sign In" subtitle="Welcome back ! please can you fill the form below to continue ."/>
          <View style={{gap:13, marginTop:2}}>
            <InputField name="Email" />
            <InputField name="Password" />
          </View>
          <Text onPress={()=>router.push('/forgotPassword')}
          style={{fontSize:14, fontWeight:'600', color:'#0a45d0cb', alignSelf:'flex-end', paddingHorizontal:12,paddingVertical:10, paddingTop:18, textDecorationLine:'underline', paddingBottom:16}}>
            Forgot your password ?
          </Text>
          <Submitbutton message="Sign In" />
          <OrSeperator/>
          <AuthLinks />
          <View style={{flexDirection:'row', gap:12 , justifyContent:'center', paddingVertical:12}}>
            <Text style={{fontSize:16, fontWeight:'400', color:'#4e4e4ea4'}}>
              Don't have an account ? 
            </Text>
            <Text onPress={()=>router.push('/register')} 
            style={{fontSize:16, fontWeight:'600', color:'#0a45d0cb'}}>Sign Up</Text>
          </View>
        </ScrollView>
      </View>
    );
}