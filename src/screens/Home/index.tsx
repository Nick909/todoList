import React, { useState } from 'react';

import {
  FlatList,
  View,
  LayoutAnimation
  
} from 'react-native';

import { styles } from './styles';

import { ExpandableCard } from '../../components/ExpandableCard';
import { AddButton } from '../../components/AddButton';
import { ModalView } from '../../components/ModalView';
import { Header } from '../../components/Header';

export function Home () {
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
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

  function handlerSwitchModal () {
    setOpenGuildsModal(!openGuildsModal);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  return (
    <View style={styles.container}>

      <Header title='Todo List' />
      { !openGuildsModal ?
      
        <View style={styles.content} >
          <View style={styles.addButton} >
            <AddButton onPress={ handlerSwitchModal } />

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

        :
        <>
          <ModalView closeModal={ handlerSwitchModal } visible={ openGuildsModal } />
          <View style={styles.backCover} />
          
        </>

      }
      
    </View>
  );
}

