import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import NameText from './src/components/NameText'

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000",
    },
  })

  return (
    <View style={styles.container}>
        <NameText personName="Ram"/>
        <NameText personName="Nirbhay"/>
        <NameText personName="Ram"/>
        <NameText personName="Nirbhay"/>
    </View>
  )
}
