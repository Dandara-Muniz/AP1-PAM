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
    backgroundColor: '#950606',
    width: 210,
    height: 2,
    marginLeft: 8,
  },
  title: {
    fontSize: 54,
    color: '#950606',
    textAlign: 'center',
  },
  subTitulo: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 14,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFFFFF',
    width: 180,
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: { width: -4, height: 4 }, // Deslocamento (x, y)
    textShadowRadius: 24, // Raio de desfoque
    marginBottom: 5,
    marginLeft: 14,
  },
  image: {
    width: 380,
    height: 200,
  },
  section: {
    width: 380,
    height: 400,
    marginTop: 20,
  },
  sectionItem: {
    backgroundColor: '#FFC3C3',
    height: 180,
    marginLeft: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    padding: 6,
  },
  sectionText: {
    fontSize: 14,
    padding: 6,
  },
});
export default styles;
