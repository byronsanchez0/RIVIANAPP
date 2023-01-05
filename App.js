import'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ModelR from './ModelR';
import ModelS from './ModelS';
import BuyModelR from './BuyModelR';
import BuyModelS from './BuyModelS.js';
import DetallesCita from './DetallesCita';
import StripeGateway from './StripeGateway';



function Splash({navigation}){

    setTimeout(()=>{
       navigation.navigate('Login')
            }, 3000);

return(
  <View style={{ alignItems:'center'}}>
      <Image  
       style={{ width:'100%', height: '100%', marginBottom: 15 }}
        source={require("./assets/Logo.png") }/>
  </View>
)
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="splash" 
        options={{headerShown: false}}
        
         component={Splash}/> 
        <Stack.Screen name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}  />
         <Stack.Screen name="Home"
        component={HomeScreen} 
        options={{ headerShown: false }} />
        <Stack.Screen name="ModelR"
        component={ModelR} options={{ headerShown: false }}
         />
         <Stack.Screen name="ModelS"
        component={ModelS} options={{ headerShown: false }}
         />
         <Stack.Screen name="BuyModelR"
        component={BuyModelR} options={{ headerShown: false }}
         /><Stack.Screen name="BuyModelS"
         component={BuyModelS} options={{ headerShown: false }}
          />
          <Stack.Screen name="DetallesCita"
         component={DetallesCita} options={{ headerShown: false }}
          />
          <Stack.Screen name="StripeGateway"
         component={StripeGateway} options={{ headerShown: false }}
          />
         
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});