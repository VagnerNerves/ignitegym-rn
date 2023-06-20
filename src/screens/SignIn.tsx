import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
  KeyboardAvoidingView
} from 'native-base'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} px={10}>
          <Image
            source={BackgroundImg}
            alt="Pessoas Treinando"
            resizeMode="contain"
            position="absolute"
          />

          <Center my={24}>
            <LogoSvg />

            <Text color="gray.100" fontSize="sm">
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center>
            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
              Acesse sua conta
            </Heading>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Senha" secureTextEntry />

            <Button title="Acessar" />
          </Center>

          <Center mt={24}>
            <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
              Ainda não tem acesso?
            </Text>

            <Button
              title="Criar conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
