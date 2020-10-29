import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Router from './router'
// import { ILLogo } from './assets'

export default function App() {
  return (
    <NavigationContainer>
      {/* <GetStarted /> */}
      <Router />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
