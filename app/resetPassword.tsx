import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, Modal } from 'react-native'
import Header from './authComponent/Header'
import { router } from 'expo-router'

export default function resetPassword() {
  const [modalVisible, setModalVisible] = useState(false)

  const handleReset = () => {
    // Your reset logic here
    setModalVisible(true)
  }

  return (
    <View style={{ paddingVertical: 24, paddingHorizontal: 6, backgroundColor: 'white', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={false} style={{ paddingBottom: 22 }}>
        <Header title="Reset Password" subtitle="Please remember to use a password that is easy to remember but hard for others to guess." />
        <View style={{ gap: 13, marginTop: 12 }}>
          <View style={{ paddingHorizontal: 11, paddingVertical: 6 }}>
            <TextInput placeholder="New Password" style={{ borderColor: '#d0d0d0c1', color: 'gray', backgroundColor: '#e9e9e975', borderWidth: 1, borderRadius: 12, height: 55, paddingLeft: 10 }} />
            <TextInput placeholder="Confirm Password" style={{ borderColor: '#d0d0d0c1', color: 'gray', backgroundColor: '#e9e9e975', borderWidth: 1, borderRadius: 12, height: 55, paddingLeft: 10, marginTop: 12 }} />
          </View>
        </View>
        <View style={{ paddingVertical: 22, paddingHorizontal: 5 }}>
          <TouchableOpacity
            onPress={handleReset}
            style={{ backgroundColor: 'rgba(48, 94, 219, 1)', width: '100%', height: 60, borderRadius: 15, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: '400', textAlign: 'center', paddingVertical: 16 }}>
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 30, width: '80%', alignItems: 'center', gap: 12 }}>
            
            {/* Icon */}
            <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#e8f0fe', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30 }}>🔒</Text>
            </View>

            {/* Title */}
            <Text style={{ fontSize: 20, fontWeight: '700', color: '#1a1a1a', textAlign: 'center' }}>
              Password Reset!
            </Text>

            {/* Subtitle */}
            <Text style={{ fontSize: 14, color: 'gray', textAlign: 'center', lineHeight: 20 }}>
              Your password has been successfully reset. You can now log in with your new password.
            </Text>

            {/* Button */}
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false)
                router.replace('/login') // adjust route as needed
              }}
              style={{ backgroundColor: 'rgba(48, 94, 219, 1)', width: '100%', height: 50, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 8 }}
            >
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                Back to Login
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  )
}