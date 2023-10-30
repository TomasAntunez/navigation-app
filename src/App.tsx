import 'react-native-gesture-handler';

import { FC } from "react";
import { NavigationContainer } from '@react-navigation/native';

import {
  // BasicLateralMenu,
  LateralMenu
} from './navigator';


const App: FC = () => {
  return (
    <NavigationContainer>
      {/* <BasicLateralMenu /> */}
      <LateralMenu />
    </NavigationContainer>
  );
}


export default App;
