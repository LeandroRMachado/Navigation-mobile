import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

import { Home } from '../screens/Home';
import { Backdoor } from '../screens/Backdoor';

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons 
              name='home'
              color={color}
              size={size}
            />
          )
        }}
      />

      <Screen
        name='Backdoor'
        component={Backdoor}
        options={{
          tabBarLabel: 'Backdoor',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name='add'
              color={color}
              size={size} 
            />
          )
        }}
      />
    </Navigator>
  );
}