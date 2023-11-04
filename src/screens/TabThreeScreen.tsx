import { FC, useEffect } from 'react';
import { View, Text } from 'react-native';


export const TabThreeScreen: FC = () => {

  useEffect(() => {
    console.log('TabThreeScreen screen');
  }, []);


  return (
    <View>
      <Text>TabThreeScreen</Text>
    </View>
  );
}
