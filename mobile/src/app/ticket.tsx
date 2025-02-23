import { useState } from "react";
import { Alert, Modal, ScrollView, Share, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Redirect } from "expo-router";
import { MotiView } from "moti";

import { colors } from "@/styles/colors";
import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { Credential } from "@/components/credential";
import { QRCode } from "@/components/qrcode";
import { useBadStore } from "@/store/badge-store";

export default function Ticket() {
  const [expandQRCode, setExpandQRCode] = useState(false)

  const badgeStore = useBadStore()

  async function handleShare() {
    try {
      if (badgeStore.data?.checkInURL) {
        await Share.share({
          message: badgeStore.data.checkInURL,
        })
      }
    } catch (error) {
      console.log(error)
      Alert.alert("Compartilhar", "Não foi possível compartilhar.")
    }
  }

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 4],
      })

      if (result.assets){
        badgeStore.updateAvatar(result.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
      Alert.alert("Foto", "Não foi possível selecionar a imagem.")
    }
  }

  if (!badgeStore.data?.checkInURL) {
    return <Redirect href='/' />
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle='light-content' />
      <Header title="Minha Credencial" />

      <ScrollView className="-mt-28" contentContainerClassName="px-8 pb-8" showsVerticalScrollIndicator={false}>
        <Credential data={badgeStore.data} onChangeAvatar={handleSelectImage} onExpandQRCode={() => setExpandQRCode(true)} />

        <MotiView from={{ translateY: 0 }} animate={{ translateY: 10 }} transition={{ loop: true, type: "timing", duration: 700 }} >
          <FontAwesome name="angle-double-down" size={24} color={colors.gray[300]} className="self-center my-6" />
        </MotiView>

        <Text className="text-white font-bold text-2xl mt-4">Compartilhar credencial</Text>
        <Text className="text-white font-regular text-base mt-1 mb-6">Mostre ao mundo que você vai participar do evento {badgeStore.data.eventTitle}!</Text>

        <Button title="Compartilhar" onPress={handleShare} />

        <TouchableOpacity activeOpacity={0.7} className="mt-10" onPress={() => badgeStore.remove()}>
          <Text className="text-orange-100 font-bold text-base text-center">Remover ingresso</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={expandQRCode} statusBarTranslucent>
        <View className="flex-1 bg-green-500 items-center justify-center">
          <QRCode value={badgeStore.data.checkInURL} size={300} />
          <TouchableOpacity activeOpacity={0.7} onPress={() => setExpandQRCode(false)}>
            <Text className="text-sm text-orange-500 font-body text-center mt-10">Fechar QRCode</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}