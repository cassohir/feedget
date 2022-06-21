import React,{useRef,useState}from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import { Options } from '../Options';
import { Form } from '../Form';
import {feedbackTypes} from '../../utils/feedbackTypes';
import {SuccessSubmitted} from '../SuccessSubmitted';


export type FeedbackType = keyof typeof feedbackTypes;
 function Widget() {


  const [feedbackType,setFeedbackType] = useState<FeedbackType | null >(null);

  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpenBottomSheet(){
    bottomSheetRef.current?.expand();

  }
  function handleRestartFeedback(){
    setFeedbackType(null);
    setFeedbackSent(false);
  }
  function handleFeedbackSent(){
    setFeedbackSent(true);
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
        {
          feedbackSent ?
            <SuccessSubmitted onSendAnotherFeedback={handleRestartFeedback} />
            :
            <>
            {

              feedbackType ?
              <Form 
              onFeedbackCanceled ={handleRestartFeedback}
              onFeedbackSent={handleFeedbackSent}
              feedbackType={feedbackType} /> :
              <Options
               onFeedbackTypeChanged={setFeedbackType} 
              />
               
            }
            </>


        }
        
      </BottomSheet>


    </>
  );
}


export default gestureHandlerRootHOC(Widget);