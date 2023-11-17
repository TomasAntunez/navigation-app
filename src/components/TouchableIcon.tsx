import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ColorPalette } from '../theme';
import { useAuth } from '../hooks';


export const TouchableIcon: FC<{ name: string }> = ({ name }) => {

  const { changeFavouriteIcon } = useAuth();

  return (
    <TouchableOpacity onPress={ () => changeFavouriteIcon(name) }>
      <Icon name={ name } size={ 80 } color={ ColorPalette.primary } />
    </TouchableOpacity>
  );
};
