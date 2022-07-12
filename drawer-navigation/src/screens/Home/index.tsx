import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export function Home() {
  const navigation = useNavigation();

  function openPage() {
    navigation.navigate('Backdoor', { name: 'This content came of inside Screen A' })
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'gray',
      justifyContent: 'center'
    }}>

      <Button
        title='Press here'
        onPress={openPage} 
      />

    </View>
  );
}