import React from 'react';

import {
  FlatList,
  View,
  
} from 'react-native';

import { styles } from './styles';

import { ExpandableCard } from '../../components/ExpandableCard';
import { Header } from '../../components/Header';
import { AddButton } from '../../components/AddButton';

export function Home () {
  const obj = [
    {
      id: '1',
      title: 'Alguma coisa 123323',

    },
    {
      id: '2',
      title: 'Alguma coisa, será',

    },
    {
      id: '3',
      title: 'Alguma coisa, será',

    },
    {
      id: '4',
      title: 'Alguma coisa',

    },
    {
      id: '5',
      title: 'Alguma coisa, será',

    },
    {
      id: '6',
      title: 'Alguma coisa, será',

    },

    {
      id: '7',
      title: 'Alguma coisa',

    },
    {
      id: '8',
      title: 'Alguma coisa, será',

    },
    {
      id: '9',
      title: 'Alguma coisa, será',

    },
    {
      id: '10',
      title: 'Alguma coisa',

    },
    {
      id: '11',
      title: 'Alguma coisa, será',

    },
    {
      id: '12',
      title: 'Alguma coisa, será',

    },
  ];

  return (
    <View style={styles.container}>
      <Header title='Todo List' />
      
      <View style={styles.content} >

        <View style={styles.addButton} >
          <AddButton />

        </View>

        <FlatList 
          data={obj}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ExpandableCard title={item.title} />
          )}
          contentContainerStyle={{paddingBottom: 50, paddingTop: 103, zIndex: 0 }}
          showsVerticalScrollIndicator={false}

        />

      </View>
    </View>
  );
}