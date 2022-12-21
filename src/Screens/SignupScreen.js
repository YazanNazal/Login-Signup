import Background from "../Components/Background";
import React from "react";
import { View,Text ,TouchableOpacity} from "react-native";
import Field from "../Components/Field";
import Btn from "../Components/Btn";
const SignupScreen = (props) => {

  

  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text style={{ color: 'white',  fontSize: 64, fontWeight: 'bold',  marginVertical: 50,
          }}>
          Signup
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
          <Text style={{fontSize: 40, color: '#ffd700', fontWeight: 'bold'}}>
            Creat a new Acount
          </Text>
          
          <Field placeholder="First name" /> 

          <Field placeholder="Last Name" />
          
          <Field
            placeholder="Email"
            keyboardType={'email-address'}
          />
           <Field
            placeholder="Phone Numper"
            keyboardType={'number'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" 
           secureTextEntry={true} />
          
          <Btn textColor='white' bgColor={'#2BB789'} btnLabel="Signup" Press={() => {
            alert("Account Created") 
            props.navigation.navigate('Login')
          } }/>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ color: '#2BB789', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>  
  );
};

export default SignupScreen;

