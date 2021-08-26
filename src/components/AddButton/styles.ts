import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    borderWidth: 1,
    borderColor: theme.colors.grayW,
  }
});