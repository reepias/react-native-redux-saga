import React, { PureComponent } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Platform,
  SafeAreaView,
} from 'react-native'

let styles

const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableHighlight

class App extends PureComponent {
  loadData = () => {
    alert('fetch data')
  }
  render() {
    const { container, text, button, buttonText } = styles
    return (
      <SafeAreaView style={container}>
        <Text style={text}>React-Native Redux Examples</Text>
        <Touchable onPress={this.loadData} style={button}>
          <Text style={buttonText}>Load Data</Text>
        </Touchable>
      </SafeAreaView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    justifyContent: 'flex-start',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
    height: 50,
    marginTop: 10,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
})

export default App
