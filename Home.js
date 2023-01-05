import React from 'react';
import {View, StyleSheet,Image, Dimensions, Animated, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { auth } from './firebase';
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from "expo-linear-gradient";


const Home = (props) => {
  // arrglo de imagenes
  const imagenes = [

    "https://scontent.fsal3-1.fna.fbcdn.net/v/t39.30808-6/277727331_101439585870733_848852093796842867_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=WzL706-b4rUAX88y4iv&_nc_ht=scontent.fsal3-1.fna&oh=00_AT9dgzv-XRwKpmVVvRL6RX3vJke7z1eDu1svSfqk88DZCA&oe=624A8A55",
    "https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/277761523_101439602537398_4040562502174153354_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=UjcQdVOxXu8AX8SCSUT&_nc_ht=scontent.fsal2-1.fna&oh=00_AT8fy4jPiNy2Bm2msVWUZLkwzMUTh7A-7zUnBbEITuTL8A&oe=624A73B6",
    "https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/277764841_101439565870735_8606014096617798462_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=uG5iKverWsMAX-T2CTC&_nc_ht=scontent.fsal2-1.fna&oh=00_AT_rsFKSRBZz4EmhlPsbsU119RO_HXSKKAjWIRRqoik7QA&oe=624AF62E",
    "https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/276139425_101439625870729_396991921636436698_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=haT40vRH314AX8cGNWo&_nc_ht=scontent.fsal2-1.fna&oh=00_AT_8YVSDYgvCiqhq32YVerXUpEgD92mnlhvvUKbORBFB0g&oe=624B7034",
  ];
  // colocando dimensiones
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  // declarando caracteristicas del contenedor de imagen
  const ancho_del_contenedor = width * 0.85;
  // indicando las imagenes visibles en la pantalla
  const espacio_contenedores = (width - ancho_del_contenedor) / 2;
  const espacio = 3;
  const altura_imagen_fondo = height;
  // funcion para funcionamiento de carrusel
  function CrearCarrusel({ scrollX }) {
    return (
      <View
        style={[
          {
            position: "absolute",
            height: altura_imagen_fondo,
            top: 0,
            width: width,
          },
          StyleSheet.absoluteFillObject,
        ]}
      >
        {imagenes.map((imagen, index) => {
          const inputRange = [
            (index - 1) * ancho_del_contenedor,
            index * ancho_del_contenedor,
            (index + 1) * ancho_del_contenedor,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={index}
              source={{ uri: imagen }}
              style={[
                { width: width, height: altura_imagen_fondo, opacity },
                StyleSheet.absoluteFillObject,
              ]}
            />
          );
        })}
        {/* colocando efecto gradiente */}
        <LinearGradient
          colors={["transparent", "white"]}
          style={{
            width,
            height: altura_imagen_fondo,
            position: "absolute",
            bottom: 0,
          }}
        />
      </View>
    );
  }
  const scrollX = React.useRef(new Animated.Value(2)).current;
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

      <StatusBar hidden />
      <CrearCarrusel scrollX={scrollX} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        // indicando salida del carrusel
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          paddingTop: 200,
          paddingHorizontal: espacio_contenedores,
        }}
        snapToInterval={ancho_del_contenedor}
        decelerationRate={0}
        data={imagenes}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ancho_del_contenedor,
            index * ancho_del_contenedor,
            (index + 1) * ancho_del_contenedor,
          ];
          // Altura de la animacon
          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -40, 0],
          });
          return (
            <View style={{ width: ancho_del_contenedor }}>
              <Animated.View
                style={{
                  marginHorizontal: espacio,
                  padding: espacio,
                  borderRadius: 30,
                  backgroundColor: "'white",
                  alignItems: "center",
                  transform: [{ translateY: scrollY }],
                }}
              >
                <Image source={{ uri: item }} style={styles.posterImage} />
              </Animated.View>
            </View>
          );
        }}
      />




    </SafeAreaView>
  )


}



export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  posterImage: {
    width: "100%",
    height: '90%',
    resizeMode: "cover",
    borderRadius: 20,
    borderColor: '#ffffff',
    borderWidth: 5
  }
})