import { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { styles } from '../theme';


interface Props extends StackScreenProps<any, any> {}

export const PageThreeScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>PageThreeScreen</Text>

      <Button
        title='Go back'
        onPress={ () => navigation.pop() }
      />

      <Button
        title='Go to page one'
        onPress={ () => navigation.popToTop() }
      />
    </View>
  );
}
