import { FC } from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from '../theme';
import { useAuth } from '../hooks';


export const ContactScreen: FC = () => {

  const { authState: { isAuthenticated }, signIn } = useAuth();

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>ContactScreen</Text>

      {
        !isAuthenticated && <Button title='SignIn' onPress={ signIn } />
      }
    </View>
  );
};
