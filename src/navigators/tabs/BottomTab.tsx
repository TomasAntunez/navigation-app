import { FC } from 'react';
import { Platform } from 'react-native';

import { IosBottomTab } from './IosBottomTab';
import { AndroidBottomTab } from './AndroidBottomTab';


export enum BottomTabScreenName {
  TAB_ONE   = 'tab-one',
  TAB_TWO   = 'tab-two',
  TAB_THREE = 'tab-three',
}

export type RootStackParamList = {
  [BottomTabScreenName.TAB_ONE]:   undefined;
  [BottomTabScreenName.TAB_TWO]:   undefined;
  [BottomTabScreenName.TAB_THREE]: undefined;
};


export const BottomTab: FC = () => {
  return Platform.OS === 'ios'
    ? <IosBottomTab />
    : <AndroidBottomTab />;
}
