import { Text, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fonstLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {fonstLoaded ? (
        <Text style={{ fontFamily: 'Roboto_700Bold' }}>Hello World!</Text>
      ) : (
        <View />
      )}
    </View>
  )
}
