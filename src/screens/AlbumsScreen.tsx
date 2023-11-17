import { FC } from 'react';
import { Button, Text, View } from 'react-native';

import { useAuth } from '../hooks';
import { styles } from '../theme';


export const AlbumsScreen: FC = () => {

  const { authState: { isAuthenticated }, signOut } = useAuth();

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Albums Screen</Text>

      {
        isAuthenticated && <Button title='SignOut' onPress={ signOut } />
      }
    </View>
  );
}
