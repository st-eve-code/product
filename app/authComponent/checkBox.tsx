import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function Checkbox() {
    const [ischecked, setChecked] = useState(false);
    const handleCheck = ()=>{
        setChecked(!ischecked);
    }
  return (
    <View style={{paddingVertical:20, paddingHorizontal:6, flexDirection:'row', gap:8, paddingLeft:12, alignItems:'center'}}>
       {ischecked ? (
            <TouchableOpacity onPress={handleCheck} style={{borderWidth:1, borderColor:'#a09e9eff', borderRadius:5}}>
                    <Ionicons name='checkmark' size={20} color={'white'}/>
            </TouchableOpacity>

            ) : (
            <TouchableOpacity onPress={handleCheck} style={{borderWidth:1.8, borderColor:'#0e6cfbff', borderRadius:5}}>
                <Ionicons name='checkmark' size={20} color={'blue'}/>
               </TouchableOpacity>
            )}
      <Text style={styles.checkbox}>
        I agree to all terms and policies
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  checkbox: {
    fontSize:14,
    color:'rgba(39,39,39,1)',
    fontWeight:'400',
    textAlign:'center',
  },
})