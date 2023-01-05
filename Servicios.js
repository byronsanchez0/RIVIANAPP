import React from 'react';
import { SafeAreaView, Text, ScrollView, View, Image, StyleSheet } from 'react-native';


const Servicios = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewtitle}>
        <Text style={styles.txttitulo}>SERVICIOS</Text>
      </View>
      <ScrollView style={styles.scrollviewestyle}>
        <View style={{ width: '100%', height: '100%' }}>
          <Image style={styles.img}
            source={require("./assets/seguro.png")} />
          <Image style={styles.img}
            source={require("./assets/taller.png")} />
          <Image style={styles.img}
            source={require("./assets/carga.png")} />
          <Image style={styles.img}
            source={require("./assets/herramientas.png")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default Servicios
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff'
  },
  viewtitle: {
    width: '100%',
    height: 75,
    backgroundColor: '#154C59',
    marginBottom: '5%'
  },
  img: {
    width: 400,
    height: 250,
    marginTop: 20,
    borderRadius: 12,
    marginLeft: '8%'
  },
  txttitulo: {
    fontSize: 30,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: '5%',
    fontWeight: 'bold'
  },
  scrollviewestyle: {
    width: 475,
    alignContent: 'center',

  }

})
