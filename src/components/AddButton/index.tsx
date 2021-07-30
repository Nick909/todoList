import React from 'react';

import {
  Alert,
  View
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles';

export function AddButton(){
  return (
    <RectButton style={styles.container} onPress={() => Alert.alert('rodou')}>
      <FontAwesome5 name="plus" size={24} color={theme.colors.grayW} />
    </RectButton>
  );
}