import {
  GET_ALL_ANIMALS,
  GET_ALL_ANIMALS_FAILURE,
  GET_ALL_ANIMALS_SUCCESS,
} from '../actionTypes'

const initialState = {
  animals: [],
  isFetching: false,
  error: false,
}

const animalReducer = (state = initialState, action) => {
  const { type, animals } = action
  console.log('action: ', action)
  switch (type) {
    case GET_ALL_ANIMALS:
      return {
        ...state,
        animals: [],
        isFetching: true,
      }
    case GET_ALL_ANIMALS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      }
    case GET_ALL_ANIMALS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        animals: animals,
      }
    default:
      return state
  }
}

export default animalReducer
