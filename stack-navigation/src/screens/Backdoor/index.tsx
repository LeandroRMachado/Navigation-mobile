import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';

export function Backdoor() {
  return (
    <LinearGradient
      colors={['#428285', '#884d7e']}
      style={{
        flex: 1
      }}
    />
  );
}