import { all } from 'redux-saga/effects'
import animalSagas from './animal'
import authSagas from './auth'

export default function* rootSaga() {
  yield all([animalSagas(), authSagas()])
}
