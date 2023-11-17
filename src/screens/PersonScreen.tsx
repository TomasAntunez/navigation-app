import { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../navigators';
import { styles } from '../theme';
import { useAuth } from '../hooks';


// interface RouteParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}


export const PersonScreen: FC<Props> = ({ route, navigation }) => {

  // const params = route.params as RouteParams;
  const { params } = route;

  const { changeUsername } = useAuth();

  
  useEffect( () => {
    const { name } = params;

    navigation.setOptions({ title: name });
    changeUsername( name );
  }, []);


  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>
        { JSON.stringify( params, null, 3 ) }
      </Text>
    </View>
  );
}
