import React from 'react';
import { SafeAreaView, Text,View,Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';


const Modelos =() => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titulo}>
      <Text style={styles.txttitulo}>MODELOS</Text>
      </View>
      <ScrollView style={styles.scrollviewestyle}>
          <View><Text style={styles.textStyle1}>RIVIAN R1</Text>
        <Image style={styles.image1} source={require("./assets/r5.jpg")  }/>
        <TouchableOpacity style={styles.button1} onPress={() =>navigation.navigate('ModelR', { name: 'ModelR' })}><Text style={styles.buttonText1}>Ver</Text>
         </TouchableOpacity>
         </View>
        <View style={styles.ViewModelsStyle1}><Text style={styles.textStyle2}>RIVIAN S1</Text>
        <Image style={styles.image2} source={require("./assets/s1.jpg")  }/>
        <TouchableOpacity style={styles.button1} onPress={() =>navigation.navigate('ModelS', { name: 'ModelS' })}><Text style={styles.buttonText1}>Ver</Text>
         </TouchableOpacity></View>
         </ScrollView>
    </SafeAreaView>
  )
}
    

export default Modelos
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  titulo:{
    width:'100%',
    height:75,
    backgroundColor:'#154C59',
    marginBottom:'5%',
  },
  txttitulo:{
    fontSize:30,
    width:'100%',
    height:'100%',
    textAlign:'center',
    color:'#ffffff',
    marginTop:'5%',
    fontWeight:'bold'
  },
  image1:{
    padding:12,
    height:230,
    width:375,
    marginTop:'6%'
  
  },
  image2:{
    padding:12,
    height:230,
    width:375,
  
  },
  textStyle1:{
    position: 'absolute',
    zIndex: 10,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '5.5%',
    alignSelf: 'flex-end',
  },
  textStyle2:{
    position: 'absolute',
    zIndex: 10,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
     button1:{
  backgroundColor: ('#0E4C59'),
  width: 200,
  height: 40,
  borderRadius: 11,
  marginVertical:'2%',
  alignSelf: 'center',
   },
   button2:{
    backgroundColor: ('#0E4C59'),
    width: 300,
    height: 50,
    borderRadius: 11,
    marginTop:'2%',
    alignSelf: 'flex-end',
     },
   buttonText1:{
    textAlign: 'center',
    padding:8,
    color:'white',
    fontSize: 18,
     },
     ViewModelsStyle:{
      marginTop:'1%',
      width:'100%'
     },
  })