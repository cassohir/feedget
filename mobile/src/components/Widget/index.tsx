import React,{useRef}from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import { Options } from '../Options';
import { Form } from '../Form';
import {feedbackTypes} from '../../utils/feedbackTypes';


export type FeedbackType = keyof typeof feedbackTypes;
 function Widget() {

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpenBottomSheet(){
    bottomSheetRef.current?.expand();

  }

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleOpenBottomSheet}
       >
        <ChatTeardropDots
          size={24}
          color={theme.colors.azul_default}
          weight="bold"
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1,280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}

      >
        <Form
          feedbackType="BUG"
        
        />
        
      </BottomSheet>
        {/* <Options />
        
      </BottomSheet> */}


    </>
  );
}


export default gestureHandlerRootHOC(Widget);