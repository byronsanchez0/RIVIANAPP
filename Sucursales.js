import React from 'react';
import {SafeAreaView, Text,View, Image, TouchableOpacity, StyleSheet, Linking} 
from 'react-native';



const Sucursales = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.txttitulo}>SUCURSALES</Text>
      </View>
      <View style={styles.viewlocal1} >
        <TouchableOpacity style={styles.local1}
          onPress={() => { Linking.openURL('https://goo.gl/maps/wGAzjAortU7Z5QG58') }}>
          <Image style={styles.image1}
            source={require("./assets/garage.png")} />
          <View style={styles.viewimage1}>
            <Text style={styles.txtS1}>San Salvador</Text>
            <Image style={styles.imageempresa1}
              source={require("./assets/nombreempresa.png")} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.viewlocal2} >
        <TouchableOpacity style={styles.local2}
          onPress={() => { Linking.openURL('https://goo.gl/maps/jCCXKaejPp4hcSkXA') }}>
          <Image style={styles.image2}
            source={require("./assets/garage.png")} />
          <View style={styles.viewimage2}>
            <Text style={styles.txtS2}>La libertad</Text>
            <Image style={styles.imageempresa2}
              source={require("./assets/nombreempresa.png")} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}



export default Sucursales
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#ffffff'

  },
  viewlocal1: {
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '10%',
    marginBottom: '8%',
    marginTop: '25%',
    borderColor: '#0E4C59',
    borderWidth: 4,
    width: '90%',
    height: '20%',
    borderRadius: 13,
    elevation: 15
  },
  viewimage1: {
    flexDirection: 'column',
    marginLeft: '5%',
    width: '45%',
    backgroundColor: '#ffffff'
  },
  imageempresa1: {
    width: '130%',
    height: '15%',
    marginTop: "10%",
    marginLeft: '10%'

  },
  image1: {
    width: '20%',
    height: '60%',
    marginTop: '5%',
    marginLeft: '5%'
  },
  local1: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    borderRadius: 9,
    backgroundColor: '#ffffff'
  },
  txtS1: {
    textAlign: 'center',
    marginTop: '10%',
    color: '#307B8C',
    fontWeight: 'bold',
    fontSize: 25,
    width: '100%',
    marginLeft: '5%'
  },
  viewlocal2: {
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '10%',
    marginBottom: '8%',
    borderColor: '#0E4C59',
    borderWidth: 4,
    width: '90%',
    height: '20%',
    borderRadius: 13,
    elevation: 15
  },
  viewimage2: {
    flexDirection: 'column',
    marginLeft: '5%',
    width: '40%',
    backgroundColor: '#ffffff'
  },
  imageempresa2: {
    width: '130%',
    height: '15%',
    marginTop: "10%",
    marginLeft: '10%'
  },
  image2: {
    width: '20%',
    height: '60%',
    marginTop: '5%',
    marginLeft: '5%'
  },
  local2: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    borderRadius: 9,
    backgroundColor: '#ffffff'
  },
  txtS2: {
    textAlign: 'center',
    marginTop: '10%',
    color: '#307B8C',
    fontWeight: 'bold',
    fontSize: 25,
    width: '100%',
  },
  titulo: {
    width: '100%',
    height: 75,
    backgroundColor: '#154C59',
    marginBottom: '5%',
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
  cargas: {
    width: '80%',
    height: 45,
    backgroundColor: '#154C59',
    marginBottom: '5%',
    borderRadius: 12,
    marginLeft: '10%'
  },
  txtcarga1: {
    fontSize: 20,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: '2%',
    fontWeight: 'bold'
  },
  btnhotel: {
    width: '40%',
    height: '180%'
  },
  viewhotel: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    margin: '10%'
  },
  txthotel: {
    fontSize: 20,
    height: '70%',
    marginBottom: '5%'
  },
  imagehotel: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: '#154C59',
    borderWidth: 3,
    alignItems: 'center',
  },
  viewfinal: {
    borderTopColor: "#154C59",
    borderTopWidth: 3,
    width: '90%',
    alignItems: 'center',
    marginLeft: '5%'
  },
  txtversion: {
    color: '#8EBF24',
    fontSize: 15,
    marginTop: '5%'
  },
  btncerrarsesion: {
    width: '40%',
    height: '17%',
    marginTop: '10%',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 0.5
  },
  txtcerrarsesion: {
    textAlign: 'center',
    marginTop: '5%',
    color: "#154C59",
  }

})
