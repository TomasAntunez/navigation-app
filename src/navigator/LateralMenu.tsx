import { FC } from 'react';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import {
  DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator
} from '@react-navigation/drawer';

import { SettingsScreen } from '../screens';
import { styles } from '../theme';
import { StackNavigator } from './StackNavigator';


const Drawer = createDrawerNavigator();

export const LateralMenu: FC = () => {

  const { width, height } = useWindowDimensions();


  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: (height > width) ? 'front' : 'permanent'
      }}
      drawerContent={ props => <MenuContent { ...props } /> }
    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}


const MenuContent: FC<DrawerContentComponentProps> = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={ styles.avatarContainer }>
        <Image
          source={{ uri: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif' }}
          style={ styles.avatar }
        />
      </View>

      <View style={ styles.menuContainer }>
        <TouchableOpacity
          style={ styles.menuButton }
          onPress={ () => navigation.navigate('StackNavigator') }
        >
          <Text style={ styles.menuButtonText }>Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ styles.menuButton }
          onPress={ () => navigation.navigate('SettingsScreen') }
        >
          <Text style={ styles.menuButtonText }>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
