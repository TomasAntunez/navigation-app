import { FC, useEffect } from 'react';
import { View, Text } from 'react-native';


export const TabOneScreen: FC = () => {

  useEffect(() => {
    console.log('TabOneScreen screen');
  }, []);


  return (
    <View>
      <Text>TabOneScreen</Text>
    </View>
  );
}
