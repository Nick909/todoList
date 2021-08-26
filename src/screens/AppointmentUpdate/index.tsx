import React, { useState } from 'react';

import {
  View,
  LayoutAnimation,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { styles } from './styles';

import { updateTodo } from '../../redux/features/todoListSlice';
import { useAppDispatch } from '../../redux/hooks';

import { ModalView, Todo } from '../../components/ModalView';
import { Header } from '../../components/Header';



export function AppointmentUpdate ({}) {
  const [openGuildsModal, setOpenGuildsModal] = useState(true);
  
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  console.log(id, 'AppointmentUpdate 26');

  const dispatch = useAppDispatch();
  

  function handlerSwitchModal () {
    setOpenGuildsModal(!openGuildsModal);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTimeout(() => navigation.goBack(), 500);

  }

  function handlerSaveTodo (todo: Todo) {
    const { title, text, name} = todo;
    dispatch(updateTodo({ id, title, text, name}));

  }


  return (
    <View style={styles.container}>

      <Header title='Todo List' />
  
      <ModalView closeModal={ handlerSwitchModal } visible={ openGuildsModal } saveTodo={handlerSaveTodo} />
      <View style={styles.backCover} />
      
    </View>

  );
}

