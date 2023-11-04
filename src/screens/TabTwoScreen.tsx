import { FC, useEffect } from 'react';
import { View, Text } from 'react-native';


export const TabTwoScreen: FC = () => {

  useEffect(() => {
    console.log('TabTwoScreen screen');
  }, []);


  return (
    <View>
      <Text>TabTwoScreen</Text>
    </View>
  );
}
