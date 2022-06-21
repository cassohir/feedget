import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { FeedbackType } from '../../components/Widget';
import { ScreenShotButton } from '../../components/ScreenShotButton';
import { SubmitButton } from '../../components/SubmitButton';
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { api } from '../../libs/api';

interface PropsForm {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: PropsForm) {

  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const [comment, setComment] = useState('');

  const [screenshot, setScreenShot] = useState<string | null>(null);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8,

    }).then(uri => setScreenShot(uri)).catch(err => console.error(err));
  }
  function handleScreenshotRemove() {
    setScreenShot(null);
  }

  async function handleSubmitFeedback() {
    if (isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenShotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });
    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenShotBase64}`,
        comment,
      });

     onFeedbackSent();

    } catch (erro) {
      console.log("não consegui enviar o feedback");
      setIsSendingFeedback(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onFeedbackCanceled}
        >
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
        autoCorrect={false}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenShotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <SubmitButton
          onPress={handleSubmitFeedback}
          isLoading={isSendingFeedback}
        />

      </View>
    </View>
  );
}