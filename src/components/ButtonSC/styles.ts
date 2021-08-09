import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    width: '100%',
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  title: {  
    fontFamily: theme.fonts.title400,
    fontSize: 18,
    color: theme.colors.white,

  }
});