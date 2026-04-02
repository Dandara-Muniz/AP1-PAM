import { View, Text, ScrollView, ImageBackground } from 'react-native';
import CurriculoComponents from '../../components/CurriculoComponents';
import styles from '../../Styles/CurriculoStyles';
export default function CurriculoScreens() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}></View>

        <Text style={styles.title}>Meu currículo</Text>
        <Text style={styles.subTitulo}>*Separado por tópicos.</Text>
        <View style={styles.hr}></View>

        <View style={styles.justify}>
          <ImageBackground
            style={styles.image}
            source={require('../images/curriculo.jpg')}>
            <Text style={styles.text}>
              Cada tópico está apresentado de forma detalhada, reunindo
              informações relevantes e bem organizadas para facilitar a
              compreensão.
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.section}>
          <CurriculoComponents />
        </View>
      </ScrollView>
    </View>
  );
}
