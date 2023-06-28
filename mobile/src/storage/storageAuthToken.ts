import AsyncStorage from '@react-native-async-storage/async-storage'

import { AUTH_TOKEN_STORAGE } from '@storage/storageConfig'

export async function storageAuthTokenSave(token: string) {
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token)
}

export async function storageAuthTokenGet() {
  const token = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE)

  return token
}

export async function storageAuthTokenRemove() {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE)
}
