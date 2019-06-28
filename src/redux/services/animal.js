/**
 * Mocking client-server processing
 */
import { animals } from '../mocks'

const TIMEOUT = 100

export const getAnimals = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(animals), TIMEOUT)
  })
}
