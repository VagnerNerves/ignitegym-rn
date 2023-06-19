import { Text, View, StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fonstLoaded ? <View /> : <View />}
    </NativeBaseProvider>
  )
}
