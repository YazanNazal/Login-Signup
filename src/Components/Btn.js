import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press, style}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 350,
        paddingVertical: 8,
        marginVertical: 4,
        shadowColor:'#00ffff',
        shadowOpacity:0.5,
        shadowRadius:100
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
