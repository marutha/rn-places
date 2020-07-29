import * as FileSystem from 'expo-file-system'
export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, imageUrl) => {
  return async (dispatch) => {
    const fileName = imageUrl.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName
    try {
      await FileSystem.moveAsync({
        from: imageUrl,
        to: newPath,
      })
      dispatch({
        type: ADD_PLACE,
        placeData: { title, imageUrl: newPath },
      })
    } catch (error) {
      throw error
    }
  }
}
