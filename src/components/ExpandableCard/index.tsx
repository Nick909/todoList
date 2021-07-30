import React, { useState } from 'react';

import {
  View,
  Text,
  LayoutAnimation, 
} from 'react-native';

import { RectButton, RectButtonProps, ScrollView } from 'react-native-gesture-handler';

import DeleteSVG from '../../assets/delete_black_24dp.svg';
import EditSVG from '../../assets/edit_black_24dp.svg';
import { theme } from '../../global/styles';
import { styles } from './styles';


type Props = RectButtonProps & {
  title: string;
}

export function ExpandableCard({ title, ...rest }: Props){
  const [expand, setExpand] = useState(false);

  function handleExpand () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    setExpand(!expand);
  }

  

  return (
    <View style={styles.container}>
      <RectButton  { ...rest } onPress={handleExpand}>
        <View style={expand ? 
          [styles.topCard, {borderTopLeftRadius: 15, borderTopRightRadius: 15}] 
          : [styles.topCard, {borderRadius: 15}]
        }>
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
    
        </RectButton>

        { expand && 
          <ScrollView style={styles.bottomCard}> 
            <View style={styles.cardIcon}>
              <EditSVG
                height={24}
                width={24}
              />

            </View>

            <Text style={styles.cardTitle}>
              O que é Lorem Ipsum?
            </Text>

            <Text style={styles.contentcard} >
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
            </Text>

          </ScrollView>

        }
    </View>
  );
}