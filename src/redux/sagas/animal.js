import { GET_ALL_ANIMALS } from '../actionTypes'
import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { getAnimals } from '../services'
import { getAnimalsFailure, getAnimalsSucess } from '../actions'

export function* getAllAnimals() {
  try {
    const animals = yield getAnimals()
    console.log('getAllAnimals: ', animals)
    yield put(getAnimalsSucess(animals))
  } catch (e) {
    console.log(e.message)
    yield put(getAnimalsFailure())
  }
}

export function* watchGetAnimals() {
  /*
    takeEvery will fork a new `getAllAnimals` task on each GET_ALL_ANIMALS actions
    i.e. concurrent GET_ALL_ANIMALS actions are allowed
  */
  yield takeEvery(GET_ALL_ANIMALS, getAllAnimals)
}

export function* rootSaga() {
  yield all([fork(getAllAnimals), fork(watchGetAnimals)])
}

export default rootSaga
