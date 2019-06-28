import { all } from 'redux-saga/effects'
import animalSagas from './animal'

export default function* rootSaga() {
  yield all([animalSagas()])
}
