import React from 'react'
import { View, Text } from 'react-native'

const PlaceDetailScreen = (props) => {
  return (
    <View>
      <Text>PlaceDetailScreen</Text>
    </View>
  )
}

PlaceDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle'),
  }
}

export default PlaceDetailScreen
