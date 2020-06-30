import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000",
    },
    textSyle: {
      color: "#ffffff",
      fontSize: 20,
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.textSyle}>Nirbhay</Text>
    </View>
  )
}
