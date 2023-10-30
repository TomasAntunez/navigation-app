import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PageOneScreen, PageTwoScreen, PageThreeScreen, PersonScreen } from '../screens';


export type RootStackParams = {
  PageOneScreen:   undefined;
  PageTwoScreen:   undefined;
  PageThreeScreen: undefined;
  PersonScreen:    PersonScreenParams;
}

type PersonScreenParams = {
  id: number;
  name: string;
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      },
      cardStyle: {
        backgroundColor: 'white'
      }
    }}>
      <Stack.Screen
        name="PageOneScree" options={{ title: 'Page One' }} component={ PageOneScreen }
      />

      <Stack.Screen
        name="PageTwoScreen" options={{ title: 'Page Two' }} component={ PageTwoScreen }
      />

      <Stack.Screen
        name="PageThreeScreen" options={{ title: 'Page Three' }} component={ PageThreeScreen }
      />

      <Stack.Screen
        name="PersonScreen" options={{ title: 'Person' }} component={ PersonScreen }
      />
    </Stack.Navigator>
  );
}