import { FC } from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SettingsScreen } from '../screens';
import { StackNavigator } from './StackNavigator';


const Drawer = createDrawerNavigator();

export const BasicLateralMenu: FC = () => {

  const { width, height } = useWindowDimensions();


  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerType: (height > width) ? 'front' : 'permanent'
    }}>
      <Drawer.Screen
        name="StackNavigator" options={{ title: 'Home' }} component={ StackNavigator }
      />

      <Drawer.Screen
        name="SettingsScreen" options={{ title: 'Settings' }} component={ SettingsScreen }
      />
    </Drawer.Navigator>
  );
}