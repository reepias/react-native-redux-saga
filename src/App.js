import React, { PureComponent } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { getAnimals } from './redux/actions'

let styles

class App extends PureComponent {
  constructor(props) {
    super(props)
  }
  loadData = () => {
    console.log('loadData')
    this.props.getAnimals()
  }
  render() {
    const { container, text, button, buttonText, mainContent } = styles
    const { animals } = this.props
    console.log('animals: ', animals)
    return (
      <SafeAreaView style={container}>
        <Text style={text}>React-Native Redux Examples</Text>
        <TouchableOpacity onPress={this.loadData} style={button}>
          <Text style={buttonText}>Load Data</Text>
        </TouchableOpacity>
        <View style={mainContent}>
          {animals &&
            animals.map((animal, i) => {
              return (
                <View key={`animal-${i}`}>
                  <Text>Name: {animal.name}</Text>
                  <Text>Age: {animal.age}</Text>
                </View>
              )
            })}
        </View>
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
  mainContent: {
    margin: 10,
  },
})

const mapStateToProps = ({ animal }) => {
  const { animals } = animal
  return { animals }
}

export default connect(
  mapStateToProps,
  {
    getAnimals,
  }
)(App)
