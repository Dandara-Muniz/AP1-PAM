import { View, Text, Image} from 'react-native';
import styles from '../../Styles/ProfileStyles';

export default function ProfileScreens() {

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.justify}>
        <Image style={styles.logo} source={require('../icons/user.jpeg')} />
        <Text style={styles.title}>Dandara Muniz Navarro</Text>
          <Text style={styles.text}>ITANHAÉM — SP</Text>
      </View>

      <View style={styles.justify}>
        <View style={styles.section}>
       <Text style={styles.sectionTitle}> Dados para contato: </Text>
       <Text style={styles.sectionText}> E-mail: dandaranavarro2@gmail.com {"\n"} Telefone: (13) 991847390</Text>
        </View>

        <View style={styles.section}>
       <Text style={styles.sectionTitle}> Minhas contas(nome): </Text>
       <Text style={styles.sectionText}> Linkedin: Dandara Navarro {"\n"} GitHub: Dandara-Muniz</Text>
        </View>

      </View>
    </View>
  );
}
