import React from 'react';
import { View,Text } from 'react-native';
import{Linking} from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

export function Copyright() {
  return (
    <View >
      <Text onPress={()=> Linking.openURL('https://www.instagram.com/cassio_izidorio')} style={styles.text}>
      Feito com ♥︎ por @cassio_izidorio </Text>
      {/* <i><a  href="https://www.instagram.com/cassio_izidorio" target="_blank"rel="noopener noreferer">@cassio_izidorio</a></i> */}
     
    </View>
  );
}