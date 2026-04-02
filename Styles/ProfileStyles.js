import { StyleSheet } from 'react-native';
import {
  useFonts,
  SmoochSans_400Regular,
  SmoochSans_700Bold,
} from '@expo-google-fonts/smooch-sans';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    backgroundColor: '#FFC3C3',
    width: '100%',
    height: 60,
  },
  justify: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
   title: {
    color: '#950606',
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#FFC3C3',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    backgroundColor: '#FFC3C3',
    width: 210,
    height: 210,
    borderRadius: 1000,
    borderWidth: 6,
    borderColor: '#3d0000',
  },
  section: {
    backgroundColor: '#FFC3C3',
    width: 350,
    height: 100,
    marginTop: 6,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    padding: 6,
  },
  sectionText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
export default styles;
