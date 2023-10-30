import { FC, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { styles } from '../theme';


export const PageTwoScreen: FC = () => {

  const navigation = useNavigation< StackNavigationProp<any> >();

  useEffect( () => {
    navigation.setOptions({
      title: 'Hello World',
      headerBackTitle: 'Back'
    });
  }, []);


  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>PageTwoScreen</Text>

      <Button
        title='Go to Page 3'
        onPress={ () => navigation.navigate('PageThreeScreen') }
      />
    </View>
  );
}
