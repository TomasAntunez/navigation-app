import { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme';
import { TouchableIcon } from '../components';


const iconNames = [
  "airplane-outline",
  "attach-outline",
  "bonfire-outline",
  "calculator-outline",
  "chatbubble-ellipses-outline",
  "images-outline",
  "leaf-outline"
];


export const TabOneScreen: FC = () => {

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('TabOneScreen screen');
  }, []);


  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 10
    }}>
      <Text style={ styles.title }>Icons</Text>

      <View style={ styles.iconsContainer }>
        {
          iconNames.map( (name, index) => <TouchableIcon key={ index } name={ name } /> )
        }
      </View>
    </View>
  );
}
