import { ADD_PLACE } from './places-actions'
import Place from '../models/place'

const initialState = {
  places: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        places: state.places.concat(
          new Place(new Date().toString(), action.placeData.title)
        ),
      }

    default:
      break
  }
  return state
}
