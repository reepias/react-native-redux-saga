import { GET_MAC_ADDRESS, RECEIVE_MAC_ADDRESS } from '../actionTypes'

const initialState = {
  macAddress: [],
}

const animalReducer = (state = initialState, action) => {
  const { type, macAddress } = action
  console.log('action: ', action)
  switch (type) {
    case GET_MAC_ADDRESS:
      return {
        ...state,
        macAddress: [],
      }
    case RECEIVE_MAC_ADDRESS:
      return {
        ...state,
        macAddress: macAddress,
      }
    default:
      return state
  }
}

export default animalReducer
