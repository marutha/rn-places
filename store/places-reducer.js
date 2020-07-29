import { ADD_PLACE, SET_PLACES } from './places-actions'
import Place from '../models/place'

const initialState = {
  places: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        places: state.places.concat(
          new Place(
            action.placeData.id.toString(),
            action.placeData.title,
            action.placeData.imageUrl
          )
        ),
      }
    case SET_PLACES:
      return {
        places: action.places.map(
          (pl) =>
            new Place(
              pl.id.toString(),
              pl.title,
              pl.imageUrl,
              pl.address,
              pl.lat,
              pl.lng
            )
        ),
      }
    default:
      break
  }
  return state
}
