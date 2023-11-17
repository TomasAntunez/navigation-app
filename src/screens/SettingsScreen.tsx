import { FC } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'

import { ColorPalette, styles } from '../theme';
import { useAuth } from '../hooks';


export const SettingsScreen: FC = () => {

  const { top } = useSafeAreaInsets();

  const { authState } = useAuth();
  const { favouriteIcon } = authState;


  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 20
    }}>
      <Text style={ styles.title }>SettingsScreen</Text>

      <Text style={{ color: 'black' }}>{ JSON.stringify(authState, null, 4) }</Text>

      {
        favouriteIcon &&
          <Icon name={ favouriteIcon } size={ 150 } color={ ColorPalette.primary } />
      }
    </View>
  );
};
