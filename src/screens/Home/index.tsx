import React, { useCallback, useState } from 'react';

import {
  FlatList,
  View,
  LayoutAnimation,
  
} from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { COLLECTION_APPOINTMENTS } from '../../config/database';
import { removeTodo, cloneTodo } from '../../redux/features/todoListSlice';

import { ExpandableCard } from '../../components/ExpandableCard';
import { AddButton } from '../../components/AddButton';
import { Header } from '../../components/Header';
import { Todo } from '../../components/ModalView';

export function Home () {
  const [bool, setBool] = useState(false);
  const { todoList } = useAppSelector(state => state);
  const navigation = useNavigation();
  
  const dispatch = useAppDispatch();

  function handlerSwitchModal () {
    navigation.navigate('AppointmentDetails' as never);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  }

  function handlerRemoveTodo (id: string) {
    dispatch(removeTodo(id));

  }
 


  async function saveAppointment () {
    try {
      const storage = JSON.stringify(todoList);
      await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, storage);

    } catch (error) {
      console.log(error, 'Home 50');

    }
  }

  async function loadingAppointment () {
    try {
      const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
      const storage: Todo[] = response ? JSON.parse(response) : [];

      dispatch(cloneTodo(storage));

    } catch (error) {
      console.log(error, 'Home 63');
      
    }
  }

  useFocusEffect(useCallback(() => {
    if(bool){
      saveAppointment();

    } else {
      loadingAppointment(); 
      setBool(!bool);

    }
  }, [todoList]));

  return (
    <View style={styles.container}>

      <Header title='Todo List' />
      
      <View style={styles.content} >
        <View style={styles.addButton} >
          <AddButton onPress={ handlerSwitchModal } />

        </View>

        <FlatList 
          data={todoList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ExpandableCard 
              id={item.id} 
              title={item.title} 
              name={item.name} 
              text={item.text} 
              removeFunction={handlerRemoveTodo} 

            />
          )}
          contentContainerStyle={{paddingBottom: 50, paddingTop: 103, zIndex: 0 }}
          showsVerticalScrollIndicator={false}

        />

      </View>

        
    </View>

  );
}

