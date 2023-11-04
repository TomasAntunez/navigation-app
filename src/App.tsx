import 'react-native-gesture-handler';

import { FC } from "react";
import { NavigationContainer } from '@react-navigation/native';

import {
  // StackNavigator,
  // BasicLateralMenu,
  LateralMenu,
  // Tabs
} from './navigators';


const App: FC = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BasicLateralMenu /> */}
      <LateralMenu />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
}


export default App;
