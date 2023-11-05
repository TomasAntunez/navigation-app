import { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../theme';


export const TabOneScreen: FC = () => {

  useEffect(() => {
    console.log('TabOneScreen screen');
  }, []);


  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Icons</Text>

      <Icon name="airplane-outline" size={ 30 } color="#900" />
    </View>
  );
}
