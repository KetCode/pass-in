import {View, Image, StatusBar, Alert} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { colors } from '@/styles/colors'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { useState } from 'react'
import { api } from '@/server/api'

export default function Home() {
  const [code, setCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleAccessCredential() {
    try {
      if (!code.trim()) {
        return Alert.alert("Ingresso", "Informe o código do ingresso!")
      }
  
      setIsLoading(true)
  
      const { data } = await api.get(`/attendees/${code}/badge`)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      Alert.alert("Inscrição", "Ingresso não encontrado!")
    }
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle='light-content' />
      
      <Image source={require('@/assets/logo.png')} className='h-16' resizeMode='contain' />

      <View className='w-full mt-12 gap-3'>
        <Input>
          <MaterialCommunityIcons name='ticket-confirmation-outline' size={20} color={colors.green[200]} />
          <Input.Field placeholder='Código do ingresso' onChangeText={setCode} />
        </Input>

        <Button title='Acessar credencial' onPress={handleAccessCredential} isLoading={isLoading} />

        <Link href="/register" className='text-orange-100 text-base font-medium text-center mt-4'>Ainda não possui ingresso?</Link>
      </View>
    </View>
  )
} 