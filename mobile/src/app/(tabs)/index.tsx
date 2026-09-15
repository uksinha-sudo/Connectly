import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const ChatsTab = () => {
  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView className="flex-1">
        <Text className="text-white">
          Chats Tab
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChatsTab