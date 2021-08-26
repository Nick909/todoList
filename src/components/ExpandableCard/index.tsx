import React, { useState } from 'react';

import {
  View,
  Text,
  LayoutAnimation, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { RectButton, RectButtonProps, ScrollView } from 'react-native-gesture-handler';

import DeleteSVG from '../../assets/delete_black_24dp.svg';
import EditSVG from '../../assets/edit_black_24dp.svg';
import { theme } from '../../global/styles/styles';
import { Todo } from '../ModalView';
import { styles } from './styles';


type Props = RectButtonProps & Todo & {
  id: string;
  removeFunction: (id: string) => void;

}

export function ExpandableCard ({ 
  id,
  name, 
  title, 
  text, 
  removeFunction,
  ...rest
}: Props) {
  const [expand, setExpand] = useState(false);
  const navigation = useNavigation();

  function handleExpand () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpand(!expand);

  }

  function  handleParams () {
    navigation.navigate('AppointmentUpdate' as never, {id} as never);

  }

  

  return (
    <View style={styles.container}>
      <RectButton  { ...rest } onPress={handleExpand}>
        <View style={expand ? 
          [styles.topCard, {borderTopLeftRadius: 15, borderTopRightRadius: 15}] 
          : [styles.topCard, {borderRadius: 15}]
        }>
          <Text style={styles.title}>
            {name}  
          </Text>

          <View style={styles.divider}>
              <View style={styles.wrapper} />
              
              <RectButton onPress={() => removeFunction(id)}>
                <View style={{height: 50, justifyContent: 'center'}}>
                  <DeleteSVG 
                      height={24}
                      width={24}
                      fill={theme.colors.white}
                    
                    />

                </View>
              </RectButton>
            </View>
        </View>
      </RectButton>

        { expand && 
          <ScrollView style={styles.bottomCard}> 
          <View style={{
            flex: 1,
            flexDirection: 'row',}}>

          </View>
            <RectButton style={styles.cardIcon} onPress={handleParams} >
                <EditSVG
                  height={24}
                  width={24}

                />

            </RectButton>

            <Text style={styles.cardTitle}>
             {title}
            </Text>

            <Text style={styles.contentcard} >
              {text}
            </Text>

          </ScrollView>

        }
    </View>
  );
}