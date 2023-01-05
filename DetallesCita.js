
import React, { useState, Component } from 'react'
import { SafeAreaView,Picker,ScrollView,TextInput,View,Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import DatePicker from 'react-native-datepicker';



const DetallesCita = () => {
  const [date, setDate] = useState('09-05-2022');
  const [selectedValue, setSelectedValue] = useState("--Seleccione--");
    const navigation = useNavigation()

   

  return (
      <SafeAreaView style={styles.container}>
    <View style={styles.viewcontainer} >
    <Text style={styles.textindicacion}>Completa los datos para{'\n'} agendar tu cita</Text>

        <Text style={styles.text}>Fecha :</Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="09-05-2022"
          maxDate="09-08-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
          dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
        <Text style={styles.text}>Hora :</Text>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="10:00 AM" value="10:00 AM" />
        <Picker.Item label="10:30 AM" value="10:30 AM" />
        <Picker.Item label="11:00 AM" value="11:00 AM" />
        <Picker.Item label="11:30 AM" value="11:30 AM" />
        <Picker.Item label="1:30 PM" value="1:30 PM" />
        <Picker.Item label="2:00 PM" value="2:00 PM" />
        <Picker.Item label="2:30 PM" value="2:30 PM" />
      </Picker>
      <Text style={styles.indiaction2}>Debera presentarse 10 min antes del horario{'\n'}
            seleccionado{'\n'}{'\n'}
            Para agendar su cita de manera exitosa debera cancelar
            un costo de $2 dolares, por medio de una tarjeta de credito
            o debito</Text>
            <TouchableOpacity style={styles.button2}
         onPress={() => navigation.navigate('StripeGateway', { name: 'StripeGateway' })} ><Text style={styles.buttonText1}>Realizar pago</Text>
         </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}



export default DetallesCita

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: '5%',
      alignItems: 'center',
    },
    textindicacion:{
fontSize: 25,
textAlign:'center',
fontWeight:'bold',
borderBottomWidth:2,
textAlign:'center',
marginBottom: 50,
    },
    indiaction2:{
      textAlign:'center',
      marginTop: 30,
      marginBottom: 30
    },
    button2: {
      backgroundColor: ('#0E4C59'),
      width: 300,
      height: 50,
      borderRadius: 11,
      marginTop: 20,
      borderColor: ('#0E4C59'),
      borderWidth: 1,
    },
    buttonText1: {
      textAlign: 'center',
      padding: 10,
      color: 'white',
      fontSize: 17,
    },
    viewcontainer:{
alignItems:'center'
    },
    text:{
fontSize: 20,
marginTop: 15
    },
    input1:{
      width: 400,
      height: 50,
      borderWidth: 1,
      borderRadius: 10,
      textAlign: 'center',
      marginBottom: 15,
      color:'black',
      fontSize:15
    },
    datePickerStyle:{
      width:300,
      
    }
})