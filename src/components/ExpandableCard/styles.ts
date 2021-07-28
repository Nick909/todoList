import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.default,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 21,
    marginBottom: 44,
    
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.white,
    textAlign: 'center',
  },
  wrapper: {
    height: 38,
    borderLeftWidth: 1,
    borderColor: theme.colors.white,
    marginHorizontal: 16

  },
  divider: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center',
  },

});