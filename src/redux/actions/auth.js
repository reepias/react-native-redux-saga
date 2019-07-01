import { GET_MAC_ADDRESS, RECEIVE_MAC_ADDRESS } from '../actionTypes'

export const getMacAddress = () => {
  console.log('getMacAddress')
  return {
    type: GET_MAC_ADDRESS,
  }
}

export const receiveMacAddress = macAddress => {
  return {
    type: RECEIVE_MAC_ADDRESS,
    macAddress,
  }
}
