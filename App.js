import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreens from './assets/screens/HomeScreens';
import CurriculoScreens from './assets/screens/CurriculoScreens';
import ProfileScreens from './assets/screens/ProfileScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Curriculo') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }
            // Você pode retornar qualquer componente que desejar aqui!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // Define as cores ativas e inativas globalmente na barra de abas
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreens}
          options={{ title: 'Início' }}
        />
        <Tab.Screen
          name="Curriculo"
          component={CurriculoScreens}
          options={{ titulo: 'Currículo' }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileScreens}
          options={{ title: 'Perfil' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
