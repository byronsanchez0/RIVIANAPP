import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator, FlatList, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';


const autoURL = "https://raw.githubusercontent.com/Elizabeth186/RepoJSON/main/s1.json";
const ModelS = () => {
  const navigation = useNavigation()

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(autoURL)
      .then((response) => response.json()) 
      .then((json) => {
        setData(json.Versiones);
        setTitle(json.title);

      })
      .catch((error) => alert(error)) 
      .finally(() => setLoading(false));  
  }, []);

  async function getMoviesAsync() {
    try {
      let response = await fetch(autoURL);
      let json = await response.json();
      setData(json.Versiones);
      setTitle(json.title);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.viewtitle}>
        <Text style={styles.txttitulo}>DETALLES</Text>
      </View>
         <View>
        <Image style={styles.image1} source={require("./assets/s3.jpg")} />
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Text style={styles.title}>{title}</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ paddingBottom: 5,alignItems:"center"}}>
                <Text style={styles.textversion}>VERSION: {item.Version}</Text>
                <Text style={styles.textlist}>RANGO: {item.RANGO}</Text>
                <Text style={styles.textlist}>POTENCIA: {item.POTENCIA}</Text>
                <Text style={styles.textlist}>RECARGA: {item.RECARGA}</Text>
                <Text style={styles.textlist}>PRECIO: {item.PRECIO}</Text>
                <View style={{ marginBottom: 15, marginTop: 15 }}>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('BuyModelS', { name: 'BuyModelS' })}><Text style={styles.buttonText1}>Comprar</Text>
      </TouchableOpacity>
          </View>
              </View>
            )}
            
          />
   
        </ScrollView>
        
      )}
     
    </SafeAreaView>
   
  )

}
export default ModelS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  viewtitle: {
    width: '100%',
    height: 75,
    backgroundColor: '#154C59',
    marginBottom: '5%'
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
  image1: {
    padding: 12,
    height: 200,
    width: 400,

  },
  textversion:{
fontSize: 20,
fontWeight: "bold"
  },
  textlist:{
fontSize: 16
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign:"center",
    marginTop:10,
    borderBottomWidth: 1
  },
  button1: {
    backgroundColor: ('#0E4C59'),
    width: 100,
    height: 50,
    borderRadius: 11,
    marginVertical: '3%',
    alignSelf: 'center',
  },
  buttonText1: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 22,
  },
})