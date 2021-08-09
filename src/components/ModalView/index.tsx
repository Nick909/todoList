import React, { useState, ReactNode } from 'react';

import {
  ModalProps,
  Pressable,
  TextInput,
  Modal, 
  View, 
  Text, 
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { ButtonSC } from '../ButtonSC';

type Props = ModalProps & {
  closeModal: () => void; 
  visible: boolean;
}

export function ModalView({ closeModal, visible, ...rest }: Props){

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

                />

                <TextInput 
                  style={styles.modalTextIpunt} 
                  placeholder={'  Titulo'}
                  maxLength={50}

                />

                <View style={styles.textBox}>
                  <TextInput 
                    style={styles.textStyle} 
                    maxLength={250}
                    multiline
                  />
                </View>
                
                <ButtonSC onPress={ () => closeModal() } title='Salve' />

                <View style={styles.modalfooter} />
                  
               
            </ScrollView>

          </View>
        </View>
      </Modal>
  );
}