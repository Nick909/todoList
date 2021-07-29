import React from 'react';

import {
  FlatList,
  View,
  
} from 'react-native';

import { styles } from './styles';

import { ExpandableCard } from '../../components/ExpandableCard';
import { Header } from '../../components/Header';

export function Home () {
  const obj = [
    {
      id: '1',
      title: 'Alguma coisa',

    },
    {
      id: '2',
      title: 'Alguma coisa, será',
    },
    {
      id: '3',
      title: 'Alguma coisa, será',
    },
  ]
  return (
    <View style={styles.container}>
      <Header title='Todo List' />

      <FlatList 
         data={obj}
         keyExtractor={item => item.id}
         renderItem={({ item }) => (
          <ExpandableCard title={item.title} />
        )}
        style={styles.content}
      />
      
    </View>
  );
}