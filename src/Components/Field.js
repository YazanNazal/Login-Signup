import React from 'react';
import {TextInput} from 'react-native';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: "2BB789", paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 8, height: 40}}
      placeholderTextColor='#2BB789'></TextInput>
  );
};

export default Field;

