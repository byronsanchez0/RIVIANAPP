import React from 'react';
import { SafeAreaView,  Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from './firebase';

const AboutRivian = () => {
  const navigation = useNavigation()
  const SignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image1} source={require("./assets/Logo.png")} />
      <Text style={styles.txtversion}>Version 1.0</Text>
      <View style={styles.viewfinal}>
        <TouchableOpacity style={styles.button1} onPress={SignOut}><Text style={styles.buttonText1}>Cerrar Sesion</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )

}



export default AboutRivian
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '30%',
    alignItems: 'center',
  },
  image1: {
    padding: 12,
    height: 230,
    width: 375,
    marginTop: '6%'

  },
  image2: {
    padding: 12,
    height: 230,
    width: 375,

  },
  textStyle1: {
    position: 'absolute',
    zIndex: 10,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '5.5%',
    alignSelf: 'flex-end',
  },
  textStyle2: {
    position: 'absolute',
    zIndex: 10,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  button1: {
    backgroundColor: ('#0E4C59'),
    width: 200,
    height: 40,
    borderRadius: 11,
    marginVertical: '2%',
    alignSelf: 'center',
  },
  button2: {
    backgroundColor: ('#0E4C59'),
    width: 300,
    height: 50,
    borderRadius: 11,
    marginTop: '2%',
    alignSelf: 'flex-end',
  },
  buttonText1: {
    textAlign: 'center',
    padding: 8,
    color: 'white',
    fontSize: 18,
  },
  ViewModelsStyle: {
    marginTop: '1%',
    width: '100%'
  },
  txtversion: {
    color: '#8EBF24',
    fontSize: 15,
    marginTop: '5%',
    marginBottom: '20%',
    textAlign: 'center'
  },
})