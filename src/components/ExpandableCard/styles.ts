import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 44,

  },
  topCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.default,
    paddingHorizontal: 21,

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
  bottomCard: {
    width: '100%',
    height: 175,
    padding: 21,
    borderBottomRightRadius: 20,
    backgroundColor: theme.colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  cardTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.title400,
    marginBottom: 18,

  },
  contentcard: {
    fontSize: 14,
    fontFamily: theme.fonts.text300,
    textAlign: 'justify',
    marginBottom: 36,
  },
  cardIcon: {
    alignItems: 'flex-end',
    marginBottom: 18,
  }

});