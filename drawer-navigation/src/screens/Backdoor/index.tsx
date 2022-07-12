import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

type ParamsProps = {
  name: string
}

export function Backdoor() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params as ParamsProps;

  function backScreen() {
    navigation.goBack();
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <Text style={{fontSize: 30, }}>
        {name}
      </Text>

      <Button
        title='backScreen'
        onPress={backScreen}
      />

    </View>
  );
}