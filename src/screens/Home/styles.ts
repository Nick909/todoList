import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    position: 'relative',
    flexDirection: 'column-reverse',

  },
  addButton: {
    position: 'absolute',
    marginBottom: responsiveHeight(2),
    marginLeft: responsiveWidth(78.8),
    zIndex: 1   
  },
});