import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
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
      <Image source={require('./src/images/email.png')}/>
      <NameText personName="Ram" />
      <NameText personName="Nirbhay" />
      <Image style={{height: 200,width:100}} source={{uri:'https://images.pexels.com/photos/2505693/pexels-photo-2505693.jpeg?cs=srgb&dl=blue-and-red-plants-2505693.jpg&fm=jpg'}}/>
    </View>
  )
}

//TODO: Images offline and online