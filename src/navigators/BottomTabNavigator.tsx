import { FC } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabOneScreen } from '../screens';
import { ColorPalette } from '../theme';
import { TopTabNavigator } from './TopTabNavigator';
import { StackNavigator } from './StackNavigator';


enum BottomTabScreenName {
  TAB_ONE           = 'tab-one',
  TOP_TAB_NAVIGATOR = 'tab-two',
  STACK_NAVIGATOR   = 'tab-three',
}

type RootStackParamList = {
  [BottomTabScreenName.TAB_ONE]:           undefined;
  [BottomTabScreenName.TOP_TAB_NAVIGATOR]: undefined;
  [BottomTabScreenName.STACK_NAVIGATOR]:   undefined;
};


const Tab = createBottomTabNavigator<RootStackParamList>();


const bottomTabScreenIcons: { [key in BottomTabScreenName]: string } = {
  [BottomTabScreenName.TAB_ONE]:           'T1',
  [BottomTabScreenName.TOP_TAB_NAVIGATOR]: 'T2',
  [BottomTabScreenName.STACK_NAVIGATOR]:   'T3',
};


export const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={ ({ route }) => ({
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
          <Text style={{ color }}>
            { bottomTabScreenIcons[route.name] }
          </Text>
        )
      })}
    >
      {/* <Tab.Screen
        name="TabOneScreen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{ color: props.color }}>T1</Text>
        }}
        component={ TabOneScreen }
      /> */}
      <Tab.Screen
        name={ BottomTabScreenName.TAB_ONE }
        options={{ title: 'Tab1' }}
        component={ TabOneScreen }
      />
      <Tab.Screen
        name={ BottomTabScreenName.TOP_TAB_NAVIGATOR }
        options={{ title: 'TopTab' }}
        component={ TopTabNavigator }
      />
      <Tab.Screen
        name={ BottomTabScreenName.STACK_NAVIGATOR }
        options={{ title: 'Stack' }}
        component={ StackNavigator }
      />
    </Tab.Navigator>
  );
}
