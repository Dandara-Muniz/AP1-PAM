import { View, Text, Image } from 'react-native';
import styles from '../Styles/CurriculoStyles';
import section from '../assets/db/Curriculodb';
export default function CurriculoComponents() {
  const listSection = section.map((sectionItem) => (
    <View key={sectionItem.id} style={styles.sectionItem}>
      <Text  style={styles.sectionTitle}> {sectionItem.title} </Text>
      <View style={styles.hrCurto}></View>
       <Text  style={styles.sectionText}> {sectionItem.description} </Text>
    </View>
  ));
  return (
    <View style={styles.container,{ gap: 20} }>
      {listSection}
    </View>
  );
}
