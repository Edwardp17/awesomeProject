'use strict'
import React, { Component } from 'react';
import { Text, View, APPregistry } from 'react-native';
import ViewContainer from './components/ViewContainer'

class abcrn extends Component {
  render() {
    return(
    <ViewContainer>
    <Text>{'Hello from Inside ViewContainer'}</Text>
    </ViewContainer>
    )
  }
}

const styles = React.StyleSheet.create({
  conatiner: {
    flex: 1
    justifyContent: 'center',
    alignItems: 'center'
    backgroundColor: '#F5FCFF',
  },
welcome: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
},
instructions: {
  textAlign: 'center'
  color: '#333333',
  marginBottom: 5,
},
});

AppRegistry.registerComponent('abcrn', ()=>abcrn)
