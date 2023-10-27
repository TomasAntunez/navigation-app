import 'react-native-gesture-handler';

import { FC } from "react";
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './navigator';


const App: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}


export default App;
