import {Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { Image,TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ScreenShotProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;

}


export function ScreenShotButton({screenshot,onTakeShot,onRemoveShot}: ScreenShotProps) {
  return (
    <TouchableOpacity
     style={styles.container}
     onPress={screenshot ? onRemoveShot : onTakeShot}

     >
       {
         screenshot ?
          <View>
            <Image
              source={{uri: screenshot}}
              style={styles.image}
            />

            <Trash
              style={styles.removeIcon}
              size={20}
              color={theme.colors.text_secondary}
              weight="fill"
              
            />
          </View> :

            <Camera
              size={22}
              color={theme.colors.text_secondary}
              weight="bold"
              style={styles.cameraIcon}
              />  
       }

    </TouchableOpacity>
  );
}