import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
 
} from 'react-native';
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { clave_secreta, clave_publica } from './Keys';

// create a component
const CURRENCY = 'USD';
var CARD_TOKEN = null;


function getCreditCardToken(creditCardData){
  
  const card = {
    'card[number]': creditCardData.values.number.replace(/ /g, ''),
    'card[exp_month]': creditCardData.values.expiry.split('/')[0],
    'card[exp_year]': creditCardData.values.expiry.split('/')[1],
    'card[cvc]': creditCardData.values.cvc
  };
  return fetch('https://api.stripe.com/v1/tokens', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${clave_publica}`
    },
  
    method: 'post',
    
    body: Object.keys(card)
      .map(key => key + '=' + card[key])
      .join('&')
  }).
  then(response => response.json())
  .catch((error)=>console.log(error))
};
/**
 * 
 *
 @param creditCardToken
  @return {Promise<Response>}
 */
 function subscribeUser(creditCardToken){
  return new Promise((resolve) => {
    console.log('Credit card token\n', creditCardToken);
    CARD_TOKEN = creditCardToken.id;
    setTimeout(() => {
      resolve({ status: true });
    }, 1000);
  });
};

const StripeGateway = ({navigation}) => {


  const [CardInput, setCardInput] = React.useState({})

  const onSubmit = async () => {

    if (CardInput.valid == false || typeof CardInput.valid == "undefined") {
      alert('TARJETA INVALIDA');
      return false;
    }

    let creditCardToken;
    try {
     
      creditCardToken = await getCreditCardToken(CardInput);
     
      if (creditCardToken.error) {
        alert("ERROR EN TOKEN DE TARJETA");
        return;
      }
    } catch (e) {
      console.log("e",e);
      return;
    }
    
    const { error } = await subscribeUser(creditCardToken);
    
    if (error) {
      alert(error)
    } else {
     
      let pament_data = await charges();
      console.log('pament_data', pament_data);
      if(pament_data.status == 'succeeded')
      {
        alert("PAGO DE CITA EXITOSO, PRESIONA REGRESAR");
        
      }
      else{
        alert('PAGO FALLIDO');
      }
    }
  };



  const charges = async () => {

    const card = {
        'amount': 1899, 
        'currency': CURRENCY,
        'source': CARD_TOKEN,
        'description': "Coutas"
      };

      return fetch('https://api.stripe.com/v1/charges', {
        headers: {
         
          Accept: 'application/json',
        
          'Content-Type': 'application/x-www-form-urlencoded',
          
          Authorization: `Bearer ${clave_secreta}`
        },
        
        method: 'post',
        
        body: Object.keys(card)
          .map(key => key + '=' + card[key])
          .join('&')
      }).then(response => response.json());
  };
  


  const _onChange =(data) => {
    setCardInput(data)
  }

  return (
    <View style={styles.container}>
      <View style={{height:100, marginHorizontal:"9%", borderRadius:23, marginTop:100, backgroundColor: "#3B3933", padding:"2%", width:300}}>
         <Text style={{fontSize: 25, color: 'blue',
         textAlign:'center', fontWeight:'bold',
         margin: 10, color:'#ffff'}}>Cancela tu mensualidad aca</Text>
      </View>
        
      <LiteCreditCardInput 
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        validColor="#fff"
        placeholderColor="#ccc"
        onChange={_onChange} />

      <TouchableOpacity 
      onPress={onSubmit}
      style={styles.button}>
        <Text
          style={styles.buttonText}>
          Pagar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() =>
        navigation.navigate('DetallesCita')
       }
      style={styles.button}>
        <Text
          style={styles.buttonText}>
          regresar
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  button : {
    backgroundColor:'#607D8B',
    width:150,
    height:45,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    color: 'blue',
    borderRadius: 12,
    
    
  },
  buttonText : {
    fontSize: 20,
    color: '#ffffff',
    fontWeight:'bold',
    textTransform:'uppercase',
    
  },
  inputContainerStyle : {
    backgroundColor:'black',
  },
  inputStyle : {
    elevation: 2,
    backgroundColor:"#0E4C59",
    paddingLeft:15,
    borderRadius:5,
    color:'white',
    marginTop:70,
  },
  labelStyle : {
    marginBottom:5,
    fontSize:12
  }
 
});

export default StripeGateway;