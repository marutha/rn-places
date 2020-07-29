import * as FileSystem from 'expo-file-system'
export const ADD_PLACE = 'ADD_PLACE'
export const SET_PLACES = 'SET_PLACES'
import { insertPlace, fetchPlaces } from '../helpers/db'

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces()
      console.log(dbResult)
      dispatch({ type: SET_PLACES, places: dbResult.rows._array })
    } catch (error) {}
  }
}

export const addPlace = (title, imageUrl) => {
  return async (dispatch) => {
    const fileName = imageUrl.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName
    try {
      await FileSystem.moveAsync({
        from: imageUrl,
        to: newPath,
      })
      const dbResult = await insertPlace(
        title,
        newPath,
        'My address',
        15.6,
        12.3
      )
      console.log(dbResult)
      dispatch({
        type: ADD_PLACE,
        placeData: { id: dbResult.insertId, title, imageUrl: newPath },
      })
    } catch (error) {
      throw error
    }
  }
}
