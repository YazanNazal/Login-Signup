import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from '../Components/Background';
import Btn from '../Components/Btn';
import { darkGreen, green ,gray} from '../Components/ColorStyle';


const HomeScreen = (props) => {

  return (
     
       <Background>
       <View style={{marginHorizontal:40,marginVertical:100}}>

       <Text style={{color:'white', fontSize:65  }}>let's Start Register</Text>

       <Btn bgColor={'#006A42'} textColor={'#2BB789'} btnLabel='Login' Press={()=>props.navigation.navigate('Login')} />
       <Btn bgColor={'white'} textColor={'#2BB789'} btnLabel='Signup' Press={()=>props.navigation.navigate('Signup')} />
       
       

           </View>
           <View style={{marginHorizontal:40,marginVertical:200}}>
           <Btn textColor='white' bgColor={'#2BB789'} btnLabel="Maps"  Press={() => props.navigation.navigate("Map")} />
           </View>
       </Background>
       
   )


};

const styles = StyleSheet.create({});

export default HomeScreen;

