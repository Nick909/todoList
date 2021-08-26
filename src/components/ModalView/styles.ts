import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',

  },
  modalView: {
    height: 453,
    width: '100%',
    backgroundColor: "white",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,

    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5

  },
  modalHeard: {
    height: 60,
    paddingHorizontal: 23,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.colors.black_Highlight,

  },
  modalTitle: {
    fontFamily: theme.fonts.title700, 
    fontSize: 22,   
    color: '#ffffff',
    
  },
  divider: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center',

  },
  modalContent: {
    paddingTop: 30,
    paddingHorizontal: 23,

  },
  modalTextIpunt: {
    borderBottomWidth: 1, 
    borderColor: '#000', 
    width: '100%',
    marginBottom: 50,

  },
  textBox: {
    width: '100%',
    height: 120,
    backgroundColor: theme.colors.grayW,
    borderWidth: 1,
    padding: 14,
    borderColor: '#000',
    marginBottom: 28,

  },
  textStyle: {
    fontSize: 12,
    fontFamily: theme.fonts.title400,
    color: '#000000'

  },
  modalfooter: {
    height: 50,
    
  },
  
});