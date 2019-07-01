import { GET_MAC_ADDRESS } from '../actionTypes'
import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { getAddress } from '../services'
import { receiveMacAddress } from '../actions'

export function* getMacAddressFunction() {
  try {
    const macAddress = yield getAddress()
    console.log('getMacAddressFunction: ', macAddress)
    yield put(receiveMacAddress(macAddress))
  } catch (e) {
    console.log(e.message)
  }
}

export function* getMacAddress() {
  yield takeEvery(GET_MAC_ADDRESS, getMacAddressFunction)
}

export function* rootSaga() {
  yield all([fork(getMacAddress)])
}

export default rootSaga
