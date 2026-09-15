import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '@clerk/expo'

const ProfileTab = () => {
  const {signOut} = useAuth();
  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView className="flex-1">
        <Text className="text-white">
          Profile Tab
        </Text>
        <Pressable onPress={() => signOut()} className='mt-4 bg-red-600 px-4 py-2 rounded-lg'>
          <Text>
            Signout
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileTab