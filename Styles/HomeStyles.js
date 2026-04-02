import { StyleSheet } from 'react-native';
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
  row: {
    flexDirection: 'row', // O segredo está aqui: alinha os filhos horizontalmente
    justifyContent: 'space-around', // Espaço igual entre os elementos
    alignItems: 'center',
    marginTop: 10,
  },
  justify: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  hr: {
    backgroundColor: '#3d0000',
    width: '100%',
    height: 4,
    marginTop: 15,
  },
  hrCurto: {
    backgroundColor: '#3d0000',
    width: 200,
    height: 4,
    marginTop: 15,
  },
  title: {
    color: '#3d0000',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    padding: 10,
  },
  imageText: {
    color: '#FFFFFF',
    fontSize: 18,
    padding: 10,
  },
  image: {
    backgroundColor: '#950606',
    width: 198,
    height: 250,
    borderRadius: 10,
  },
  imageLarge: {
    backgroundColor: '#950606',
    width: 390,
    height: 170,
    borderRadius: 10,
  },
});
export default styles;
