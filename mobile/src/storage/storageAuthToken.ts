import AsyncStorage from '@react-native-async-storage/async-storage'

import { AUTH_TOKE_STORAGE } from '@storage/storageConfig'

export async function storageAuthTokenSave(token: string) {
  await AsyncStorage.setItem(AUTH_TOKE_STORAGE, token)
}

export async function storageAuthTokenGet() {
  const token = await AsyncStorage.getItem(AUTH_TOKE_STORAGE)

  return token
}
