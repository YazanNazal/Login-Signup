import React from 'react';
import { Text, StyleSheet ,TouchableOpacity,View } from 'react-native';
import MapView from 'react-native-maps';
import Btn from '../Components/Btn';
import Field from '../Components/Field';



const MapScreen = (props) => {
  return (
    <View>
    <MapView
      style={styles.map}
      
    
    />
    <View style={{alignItems: 'center', width: 460}}>
    <Btn textColor='white' bgColor={'#2BB789'} btnLabel="Back" Press={() => props.navigation.navigate("Home")} />

    </View>
    </View>

  );
  
};

const styles = StyleSheet.create({
  map: {
    height: 850
  }
});

export default MapScreen;


