import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {text, Dimensions, StyleSheet} from 'react-native';
import Home from './Home';
import Modelos from './Modelos';
import Servicios from './Servicios';
import Sucursales from './Sucursales';
import Perfil from './Perfil';


const fullScreenWidth = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();



const Tab  = createBottomTabNavigator();

export default function Navigation(props){
    return (

            <Tab.Navigator 
                screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: "#307b8c" },
                tabBarInactiveTintColor: '#fff', tabBarActiveTintColor: '#91e4fb'}}>
                <Tab.Screen name= 'Home' component={Home} options={{ tabBarIcon: ({color}) =>(
                    <TabBarIcon name='home' color={color}/>
                ),  headerShown: false}}/>
                <Tab.Screen name= 'Modelos' component={Modelos} options={{ tabBarIcon: ({color}) =>(
                    <TabBarIcon name='car' color={color}/>
                ),  headerShown: false}}/>
                <Tab.Screen name= 'Servicios' component={Servicios} options={{ tabBarIcon: ({color}) =>(
                    <TabBarIcon name='sharealt' color={color}/>
                ),  headerShown: false}}/>
                <Tab.Screen name= 'Sucursales' component={Sucursales} options={{ tabBarIcon: ({color}) =>(
                    <TabBarIcon1 name='storefront' color={color}/>
                ),  headerShown: false}}/>
                <Tab.Screen name= 'Perfil' component={Perfil} options={{ tabBarIcon: ({color}) =>(
                    <TabBarIcon name='user' color={color}/>
                ),  headerShown: false}}/>
            </Tab.Navigator>


    )
    
}
function TabBarIcon({name, color}){
    return(
        <AntDesign size={30} style={{marginBottom: -3}} name={name} color={color}/>
        
    );
}
function TabBarIcon1({name, color}){
    return(
        <MaterialIcons size={30} style={{marginBottom: -3}} name={name} color={color}/>
        
    );
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
})
