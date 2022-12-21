import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../Components/Background';
import Btn from '../Components/Btn';
import { darkGreen, green } from '../Components/ColorStyle';
import Field from '../Components/Field';

import { useNavigation } from '@react-navigation/native';



const LoginScreen = (props) => {
 

  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text style={{ color: 'white',  fontSize: 64, fontWeight: 'bold',  marginVertical: 50,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: 'green', fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email "
            
            keyboardType={'email-address'}
          />
          <Field 
           placeholder="Password"
           
           secureTextEntry={true} 
          
           />

              
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: '#2BB789', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
           
            <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert("Logged In")} />


          </View>
          <View>
          
          
          </View>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: '#2BB789', fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>

          </View>
          
        </View>
      </View>
    </Background>  
  );
};

export default LoginScreen;

