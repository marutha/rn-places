import React, { useEffect } from 'react'
import { View, Text, Platform, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import PlaceItem from '../components/PlaceItem'
import HeaderButton from '../components/HeaderButton'
import { loadPlaces } from '../store/places-actions'

const PlacesListScreen = (props) => {
  const dispatch = useDispatch()
  const places = useSelector((state) => state.places.places)
  useEffect(() => {
    dispatch(loadPlaces())
  }, [dispatch])
  console.log(places)
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            props.navigation.navigate('PlaceDetail', {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            })
          }}
        />
      )}
    />
  )
}

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'All Places',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
            navData.navigation.navigate('NewPlace')
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default PlacesListScreen
