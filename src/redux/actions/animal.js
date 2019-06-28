import {
  GET_ALL_ANIMALS,
  GET_ALL_ANIMALS_FAILURE,
  GET_ALL_ANIMALS_SUCCESS,
} from '../actionTypes'

export const getAnimals = () => {
  console.log('getAnimals')
  return {
    type: GET_ALL_ANIMALS,
  }
}

export const getAnimalsSucess = animals => {
  return {
    type: GET_ALL_ANIMALS_SUCCESS,
    animals,
  }
}

export const getAnimalsFailure = () => {
  return {
    type: GET_ALL_ANIMALS_FAILURE,
  }
}
