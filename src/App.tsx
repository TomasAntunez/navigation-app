import 'react-native-gesture-handler';

import { FC } from "react";
import { NavigationContainer } from '@react-navigation/native';

import {
  // StackNavigator,
  // BasicLateralMenu,
  LateralMenu,
  // Tabs
} from './navigators';
import { AuthProvider } from './context';


const App: FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* <StackNavigator /> */}
        {/* <BasicLateralMenu /> */}
        <LateralMenu />
        {/* <Tabs /> */}
      </AuthProvider>
    </NavigationContainer>
  );
}


export default App;
