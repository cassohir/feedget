import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,

  },
  title:{
    fontSize: 14,
    color: theme.colors.text_on_brand_color,
    fontFamily: theme.fonts.medium,
  }
});