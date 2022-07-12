import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';

export function Home() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Backdoor');
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'red'
    }}>

      <Button
        title="Press button to go next page"
        onPress={openScreen}
      />

    </View>
  );
}