import React, { useState, ReactNode } from 'react';

import {
  ModalProps,
  Pressable,
  TextInput,
  Modal, 
  View, 
  Text, 
  ScrollView,
  Alert,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

import { ButtonSC } from '../ButtonSC';

export type Todo = {
  id: string;
  name: string,
  title: string,
  text: string,
}

type Props = ModalProps & {
  closeModal: () => void; 
  visible: boolean;
  saveTodo: (todo: Todo) => void;

}

export function ModalView({ closeModal, visible, saveTodo,...rest }: Props){
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  function handleSave () {
    if(title && name && text) {
      saveTodo({id: '', title, text, name})
      setName('');
      setText('');
      setTitle('');
      closeModal();

    } else {
      Alert.alert('algum campo está vazio');

    }
  }


  return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        {...rest}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <View style={styles.modalHeard}>
                <Text style={[styles.modalTitle, { marginTop: 'auto', marginBottom: 'auto' }]}>
                  New Todo
                </Text>


              <View style={styles.divider}>
                <Pressable onPress={closeModal}>
                  <AntDesign name="closecircleo" size={30} color="white" />

                </Pressable  >

              </View>

            </View>

            <ScrollView style={styles.modalContent}>
                <TextInput 
                  style={styles.modalTextIpunt} 
                  placeholder={'  Name'}
                  maxLength={50}
                  onChangeText={setName}
                  value={name}

                />

                <TextInput 
                  style={styles.modalTextIpunt} 
                  placeholder={'  Titulo'}
                  maxLength={50}
                  onChangeText={setTitle}
                  value={title}

                />

                <View style={styles.textBox}>
                  <TextInput 
                    style={styles.textStyle} 
                    maxLength={250}
                    multiline
                    onChangeText={setText}
                    value={text}

                  />
                </View>
                
                <ButtonSC onPress={ handleSave } title='Salve' />

                <View style={styles.modalfooter} />
                  
               
            </ScrollView>

          </View>
        </View>
      </Modal>
  );
}