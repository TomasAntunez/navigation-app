import { FC } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme';


export const SettingsScreen: FC = () => {

  const { top } = useSafeAreaInsets();


  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 20
    }}>
      <Text style={ styles.title }>SettingsScreen</Text>
    </View>
  );
}
