import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Backdoor } from '../screens/Backdoor';
import { Home } from '../screens/Home';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Screen
        name='Backdoor'
        component={Backdoor}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#cd37ebcc'
          },
          headerTintColor: '#ffff'
        }}
      />
    </Navigator>
  )
}

