import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { View, TextInput,Image,Text, TouchableOpacity} from 'react-native';
import { theme } from '../../theme';
import {FeedbackType} from '../../components/Widget';
import { ScreenShotButton } from '../../components/ScreenShotButton';

import { styles } from './styles';
import {feedbackTypes} from  '../../utils/feedbackTypes';

interface PropsForm {
  feedbackType: FeedbackType;
}

export function Form({feedbackType}: PropsForm) {

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft 
            size={20}
            weight="bold"
            color={theme.colors.primary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>

            {feedbackTypeInfo.title}

          </Text>

      </View>

    </View>
     <TextInput
      multiline
      style={styles.inputText}
      placeholder="Descreva com detalhes seu feedback..."
      placeholderTextColor={theme.colors.text_secondary}
     /> 

     <View style={styles.footer}>
        <ScreenShotButton 
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
          screenshot={null}
        />

     </View>
    </View>
  );
 }