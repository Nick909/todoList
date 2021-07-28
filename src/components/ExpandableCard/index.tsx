import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import { styles } from './styles';
import DeleteSVG from '../../assets/delete_black_24dp.svg';
import { theme } from '../../global/styles';

type Props = {
  title: string;
}

export function ExpandableCard({ title }: Props){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}  
      </Text>

      <View style={styles.divider}>
        <View style={styles.wrapper} />
      
          <DeleteSVG 
            height={24}
            width={24}
            fill={theme.colors.white}
          />

      </View>

      </View>
  );
}