import { createDrawerNavigator } from '@react-navigation/drawer';

import { MaterialIcons } from '@expo/vector-icons';

import { Backdoor } from '../screens/Backdoor';
import { Home } from '../screens/Home';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Login',
          drawerIcon: () => (
            <MaterialIcons
              name="login"
              size={24}
              color='red'
            />
          )
        }}
      />
      <Screen
        name="Backdoor"
        component={Backdoor}
        options={{
          drawerLabel: 'Register',
          drawerIcon: () => (
            <MaterialIcons
              name='app-registration'
              size={24}
              color='green'
            />
          )
        }} 
      />
    </Navigator>
  );
}