import DeviceInfo from 'react-native-device-info'

export const getAddress = () => {
  return new Promise(resolve => {
    DeviceInfo.getMACAddress().then(mac => {
      resolve(mac)
    })
  })
}
