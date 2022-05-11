import React from 'react';
import { View, TouchableOpacity,TouchableOpacityProps, Image, ImageProps,Text } from 'react-native';

import { styles } from './styles';
 
interface TouchableProps extends TouchableOpacityProps{
  title: string;
  image: ImageProps;
}


export function Option({title,image,...rest}:TouchableProps) {
  return (
    <TouchableOpacity style={styles.container}
    {...rest}
    
    >
      <Image
      
      style={styles.image}
      source={image}
      />
      <Text style={styles.title}>{title}</Text>

    </TouchableOpacity>
  );
}