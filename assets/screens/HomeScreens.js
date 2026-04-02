import { View, Text, Image } from 'react-native';
import styles from '../../Styles/HomeStyles';

export default function HomeScreens() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <Text style={styles.title}>
        Olá, aqui você irá visualizar meu perfil profissional como estudante de
        programação.
      </Text>
      
      <View style={styles.hr}></View>
      <View style={styles.hrCurto}></View>
      <View style={styles.row}>
        <View style={styles.image}>
          <Text style={styles.imageText}>
            Você verá com o que eu já entrei em contato, como por exemplo a foto
            ao lado que mostra linhas de código — o que virou o centro do meu
            universo, não que eu esteja reclamando.
          </Text>
        </View>
        <Image
          style={styles.image}
          source={require('../images/programacao.jpg')}
        />
      </View>

      <View style={styles.hrCurto}></View>
      <View style={styles.hr}></View>

      <View style={styles.justify}>
        <Image
          style={styles.imageLarge}
          source={require('../images/profissional.jpeg')}
        />
      </View>
      <Text style={styles.text}>
        Uma coisa que eu amo agora são esses textinhos coloridos, apesar deles
        tomeram cerca de 99% do meu tempo (o que deixa com cerca de só 2 horas
        pra ler e, agora sim, estou reclamando). Enfim, um curso que comecei a
        fazer, sem nem saber o que era, com tempo acabou virando minha carreira
        dos sonhos.
      </Text>
    </View>
  );
}
