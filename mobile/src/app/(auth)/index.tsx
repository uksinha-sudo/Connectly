import { View, Text, Dimensions, Pressable, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import useAuthSocial from '../../../hooks/useSocialAuth'
const { width, height } = Dimensions.get("window")

const AuthScreen = () => {

  const { handleSocialAuth, loadingStrategy } = useAuthSocial();

  return (
    <View className='flex-1 bg-surface-dark'>
      {/* todo: animated orbs */}
      <View className='absolute inset-0 overflow-hidden'>
        <SafeAreaView className='flex-1'>
          {/* Top Section - Branding */}
          <View className='items-center pt-10'>
            <Image
              source={require("../../../assets/images/logo.png")}
              style={{ width: 100, height: 100, marginVertical: -20 }}
              contentFit='contain'
            />
            <Text className='text-4xl font-bold text-primary font-serif tracking-wider uppercase'>
              Connectly
            </Text>
          </View>

          {/* CENTER SECTION - HERO IMG */}

          <View className='flex-1 justify-center items-center px-6'>
            <Image
              source={require("../../../assets/images/auth.png")}
              style={{ width: width - 48, height: height * 0.3 }}
              contentFit='contain'
            />

            {/* Headline */}
            <View className='mt-6 items-center'>
              <Text className='text-5xl font-bold text-foreground text-center font-sans'>
                Connect & Chat
              </Text>
              <Text className='text-3xl font-bold text-primary font-mono'>
                Seamlessly
              </Text>
            </View>
            {/* AUTH BUTTONS */}
            <View className="flex-row justify-between mt-10 gap-3">

              {/* GOOGLE */}
              <Pressable
                className="w-[48%] h-14 flex-row items-center justify-center gap-2 bg-white rounded-2xl active:scale-[0.97]"
                disabled={loadingStrategy === "oauth_apple"}
                onPress={() => handleSocialAuth("oauth_google")}
              >
                {loadingStrategy === "oauth_google" ? (
                  <ActivityIndicator size={"small"} color={"#1a1a1a"} />
                ) : (
                  <>
                    <Image
                      source={require("../../../assets/images/google.png")}
                      style={{ width: 20, height: 20 }}
                      contentFit='contain'
                    />
                    <Text className='text-gray-900 font-semibold text-sm'>Google</Text>
                  </>
                )}
              </Pressable>

              {/* APPLE */}
              <Pressable
                className="w-[48%] h-14 flex-row items-center justify-center gap-2 bg-white/10 rounded-2xl border border-white/20 active:scale-[0.97]"
                disabled={loadingStrategy === "oauth_apple"}
                onPress={() => handleSocialAuth("oauth_apple")}
              >
                {loadingStrategy === "oauth_google" ? (
                  <ActivityIndicator size={"small"} color={"#1a1a1a"} />
                ) : (
                  <>
                    <Ionicons name='logo-apple' size={20} color={"#FFFFFF"} />
                    <Text className='text-foreground font-semibold text-sm'>Google</Text>
                  </>
                )}
              </Pressable>

            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  )
}

export default AuthScreen