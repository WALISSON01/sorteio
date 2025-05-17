import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Mega Sena') {
                iconName = 'numeric';
              } else if (route.name === 'Jogo do Bicho') {
                iconName = 'paw';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
              backgroundColor: '#1e1e1e',
              position: 'absolute',
              marginHorizontal: 20,
              marginBottom: 50, // isso sobe a barra!
              borderRadius: 16,
              height: 60,
              elevation: 8,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            },
            tabBarActiveTintColor: '#00e676',
            tabBarInactiveTintColor: '#aaa',
            tabBarLabelStyle: {
              paddingBottom: 4,
              fontSize: 12,
            },
          })}
        >
          <Tab.Screen name="Mega Sena" component={MegaSenaScreen} />
          <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
