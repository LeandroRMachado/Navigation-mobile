import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

type ParamsProps = {
  name: string
}

export function Backdoor() {
  const route = useRoute();
  const { name } = route.params as ParamsProps;

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

    </View>
  );
}