import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation();
  
  function openScreen() {
    navigation.navigate('Backdoor');
  }

  return (
    <>
      <LinearGradient
        colors={['#4c4fa7', '#5e5680']}
        style={{
          flex: 1
        }}
      />

      <Button
        title='Press to go to the next screen'
        onPress={openScreen}
      />

      <LinearGradient
        colors={['#5e5680', '#4f4578']}
        style={{
          flex: 1
        }}
      />
    </>
  );
}