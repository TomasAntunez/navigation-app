import { FC } from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { ColorPalette } from '../../theme';
import { TabOneScreen, TabTwoScreen } from '../../screens';
import { StackNavigator } from '../StackNavigator';
import { RootStackParamList, BottomTabScreenName } from './BottomTab';


const BottomTab = createMaterialBottomTabNavigator<RootStackParamList>();


export const AndroidBottomTab: FC = () => {
  return (
    <BottomTab.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{ backgroundColor: ColorPalette.primary }}
    >
      <BottomTab.Screen
        name={ BottomTabScreenName.TAB_ONE }
        options={{ title: 'Tab1' }}
        component={ TabOneScreen }
      />
      <BottomTab.Screen
        name={ BottomTabScreenName.TAB_TWO }
        options={{ title: 'Tab2' }}
        component={ TabTwoScreen }
      />
      <BottomTab.Screen
        name={ BottomTabScreenName.TAB_THREE }
        options={{ title: 'Stack' }}
        component={ StackNavigator }
      />
    </BottomTab.Navigator>
  );
};
