import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: getStatusBarHeight(),
    height: 93,
    backgroundColor: theme.colors.black_Highlight,
    paddingLeft: 16,
    justifyContent: 'center',

  },
  title: {
    fontSize: 30,
    fontFamily: theme.fonts.title700M,
    color: theme.colors.white,
  },
});