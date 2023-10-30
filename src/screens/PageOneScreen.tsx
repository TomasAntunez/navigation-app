import { FC, useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { styles } from '../theme';


interface Props extends DrawerScreenProps<any, any> {}


export const PageOneScreen: FC<Props> = ({ navigation }) => {

  useEffect( () => {
    navigation.setOptions({
      headerLeft: () => <Button title='Menu' onPress={ navigation.toggleDrawer } />
    });
  }, []);


  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>PageOneScreen</Text>

      <Button title='Go to page two' onPress={ () => navigation.navigate('PageTwoScreen') } />

      <Text style={{ color: 'black', fontSize: 20, marginVertical: 20 }}>
        Navigate with arguments
      </Text>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: '#5856D6'
          }}
          onPress={ () => navigation.navigate('PersonScreen', {
            id: 1,
            name: 'Pedro'
          })}
        >
          <Text style={ styles.bigButtonText }>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: '#FF9427'
          }}
          onPress={ () => navigation.navigate('PersonScreen', {
            id: 2,
            name: 'Maria'
          })}
        >
          <Text style={ styles.bigButtonText }>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
