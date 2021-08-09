import React from 'react';

import {
  Text,
  Pressable,
  PressableProps
} from 'react-native';

import { styles } from './styles';

type Props = PressableProps & {
  title: string;

}

export function ButtonSC ({ title, ...rest }: Props){
  return (
    <Pressable style={ styles.container } { ...rest } >
      <Text style={ styles.title } >
        {title}
      </Text>
    </Pressable>
  );
}