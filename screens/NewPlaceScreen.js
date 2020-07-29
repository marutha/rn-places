import React, { useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native'

import { useDispatch } from 'react-redux'
import Colors from '../constants/Colors'
import { addPlace } from '../store/places-actions'
import ImgPicker from '../components/ImageSelector'

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState('')
  const dispatch = useDispatch()
  const titleChangeHandler = (text) => {
    setTitleValue(text)
  }

  const savePlaceHandler = () => {
    dispatch(addPlace(titleValue))
    props.navigation.goBack()
  }
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImgPicker />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  )
}

NewPlaceScreen.navigationOptions = {
  headerTitle: 'New Place',
}

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
})

export default NewPlaceScreen
