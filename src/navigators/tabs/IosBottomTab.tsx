import { FC } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabOneScreen, TabTwoScreen } from '../../screens';
import { ColorPalette } from '../../theme';
import { StackNavigator } from '../StackNavigator';
import { RootStackParamList, BottomTabScreenName } from './BottomTab';


const BottomTab = createBottomTabNavigator<RootStackParamList>();

export const IosBottomTab: FC = () => {
  return (
    <BottomTab.Navigator screenOptions={ ({ route }) => ({
      tabBarActiveTintColor: ColorPalette.primary,
      tabBarStyle: {
        // borderTopColor: ColorPalette.primary,
        borderTopWidth: 0,
        elevation: 0
      },
      tabBarLabelStyle: {
        fontSize: 15
      },
      tabBarIcon: ({ color }) => (
        <Text style={{ color }}>{ route.name }</Text>
      )
    })}>
      {/* <Tab.Screen
        name="TabOneScreen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{ color: props.color }}>T1</Text>
        }}
        component={ TabOneScreen }
      /> */}
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
}
