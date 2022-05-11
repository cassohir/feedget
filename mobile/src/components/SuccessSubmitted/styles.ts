import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image:{
    width: 36,
    height: 36,
    marginTop: 42,
    marginBottom:10,


  },
  buttonTitle:{
    fontSize: 14,
    marginBottom: 10,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,

  },
 
  button:{
    height:45,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 40,
  }
});