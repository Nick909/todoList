import React, { useState } from 'react';

import {
  View,
  LayoutAnimation,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { addTodo } from '../../redux/features/todoListSlice';
import { useAppDispatch } from '../../redux/hooks';

import { ModalView, Todo } from '../../components/ModalView';
import { Header } from '../../components/Header';



export function AppointmentDetails () {
  const [openGuildsModal, setOpenGuildsModal] = useState(true);
  
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  

  function handlerSwitchModal () {
    setOpenGuildsModal(!openGuildsModal);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTimeout(() => navigation.goBack(), 500);

  }

  function handlerSaveTodo (todo: Todo) {
    dispatch(addTodo( todo.title, todo.text, todo.name));

  }


  return (
    <View style={styles.container}>

      <Header title='Todo List' />
  
      <ModalView closeModal={ handlerSwitchModal } visible={ openGuildsModal } saveTodo={handlerSaveTodo} />
      <View style={styles.backCover} />
      
    </View>

  );
}

