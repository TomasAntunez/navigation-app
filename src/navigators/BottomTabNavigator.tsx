import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
  [BottomTabScreenName.TAB_ONE]:           'extension-puzzle-outline',
  [BottomTabScreenName.TOP_TAB_NAVIGATOR]: 'game-controller-outline',
  [BottomTabScreenName.STACK_NAVIGATOR]:   'hammer-outline',
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
          <Icon name={ bottomTabScreenIcons[route.name] } size={25} color={ color } />
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
        options={{ title: 'Tab1', headerShown: false }}
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
