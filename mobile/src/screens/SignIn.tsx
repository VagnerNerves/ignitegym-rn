import { useState } from 'react'
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import { useAuth } from '@hooks/useAuth'

import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
  KeyboardAvoidingView,
  useToast
} from 'native-base'

import { AppError } from '@utils/AppError'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

type FormDataProps = {
  email: string
  password: string
}

const signInSchema = yup.object({
  email: yup.string().required('Informe o e-mail.').email('Email Inválido.'),
  password: yup
    .string()
    .required('Informe a senha.')
    .min(6, 'A senha deve ter pelo menos 6 digítos.')
})

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  const { signIn } = useAuth()
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const toast = useToast()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>({ resolver: yupResolver(signInSchema) })

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  async function handleSignIn({ email, password }: FormDataProps) {
    try {
      setIsLoading(true)
      await signIn(email, password)
    } catch (error) {
      const isAppError = error instanceof AppError

      setIsLoading(false)

      const title = isAppError
        ? error.message
        : 'Não foi possivel entrar. Tente novamente mais tarde.'

      toast.show({ title, placement: 'top', backgroundColor: 'red.500' })
    }
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
            defaultSource={BackgroundImg}
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

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                  onSubmitEditing={handleSubmit(handleSignIn)}
                  returnKeyType="send"
                />
              )}
            />

            <Button
              title="Acessar"
              onPress={handleSubmit(handleSignIn)}
              isLoading={isLoading}
            />
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
