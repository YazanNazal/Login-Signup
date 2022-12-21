import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import SignupScreen from './src/Screens/SignupScreen'
import LoginScreen from './src/Screens/LoginScreen';
import MapScreen from './src/Screens//MabScreen';


const Stack = createNativeStackNavigator();

function App() {




  
   
  
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          
  
           
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default App;
  