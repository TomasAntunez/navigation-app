import { FC } from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ColorPalette } from '../theme';
import { ChatScreen, ContactScreen, AlbumsScreen } from '../screens';


enum TopTabScreenName {
  CHAT    = 'chat',
  CONTACT = 'contact',
  ALBUMS  = 'albums',
}

type RootStackParamList = {
  [TopTabScreenName.CHAT]:    undefined;
  [TopTabScreenName.CONTACT]: undefined;
  [TopTabScreenName.ALBUMS]:  undefined;
}


const bottomTabScreenIcons: { [key in TopTabScreenName]: string } = {
  [TopTabScreenName.CHAT]:    'Ch',
  [TopTabScreenName.CONTACT]: 'Co',
  [TopTabScreenName.ALBUMS]:  'Al',
};


type Screen = {
  name: TopTabScreenName;
  component: FC;
}

const screens: Array<Screen> = [
  {
    name: TopTabScreenName.CHAT,
    component: ChatScreen
  },
  {
    name: TopTabScreenName.CONTACT,
    component: ContactScreen
  },
  {
    name: TopTabScreenName.ALBUMS,
    component: AlbumsScreen
  }
];


const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export const TopTabNavigator: FC = () => {

  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop: top }}
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: ColorPalette.primary,
        tabBarStyle: { elevation: 0 },
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
      {
        screens.map( ({ name, component }) => (
          <Tab.Screen
            key={ name }
            name={ name }
            component={ component }
            options={{
              tabBarPressColor: ColorPalette.primary,
              tabBarIndicatorStyle: { backgroundColor: ColorPalette.primary }
            }}
          />
        ))
      }
    </Tab.Navigator>
  );
}