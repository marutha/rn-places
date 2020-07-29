import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import Colors from '../constants/Colors'

const ImgPicker = (props) => {
  const [image, setImage] = useState()
  const verifyPermission = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA)
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permission',
        [{ text: 'Okay' }]
      )
      return false
    }
    return true
  }
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission()
    if (!hasPermission) {
      return
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    })
    setImage(image.uri)
    props.onImageTaken(image.uri)
  }
  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!image ? (
          <Text>No Image picked yet</Text>
        ) : (
          <Image style={styles.image} source={{ uri: image }} />
        )}
      </View>
      <Button
        title="Take image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default ImgPicker
