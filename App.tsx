import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Base from './components/Nav/Base/Base';
import CSSAdvanced from './components/Nav/CSSAdvanced/CSSAdvanced';
import Domination from './components/Nav/Domination/Domination';
import EngineeringPart from './components/Nav/EngineeringPart/EngineeringPart';
import Home from './components/Nav/Home';
import JSFramework from './components/Nav/JSFramework/JSFramework';
import { FC, ReactElement } from 'react';

const App: FC = (): ReactElement<any, any> | null => {

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{
          headerStyle: {
            backgroundColor: '#472B28',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            letterSpacing: 0.7,
            textAlign: 'auto'
          },
        }} />
        <Drawer.Screen name="1.  Инженерная часть" component={EngineeringPart} options={{
          headerTitle: 'Инженерная часть',
          headerStyle: {
            backgroundColor: '#00CED1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            letterSpacing: 0.7,
            textAlign: 'auto'
          },
        }} />
        <Drawer.Screen name="2.  Базовая часть" component={Base} options={{
          headerTitle: 'Базовая часть',
          headerStyle: {
            backgroundColor: '#1E997C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            letterSpacing: 0.7,
            textAlign: 'auto'
          },
        }} />
        <Drawer.Screen name="3.  CSS расширенный" component={CSSAdvanced} options={{
          headerTitle: 'CSS расширенный',
          headerStyle: {
            backgroundColor: '#FF7F50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            letterSpacing: 0.7,
            textAlign: 'auto'
          },
        }} />
        <Drawer.Screen name="4.  JS Фреймворки" component={JSFramework} options={{
          headerTitle: 'JS Фреймворки',
          headerStyle: {
            backgroundColor: '#4682B4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            letterSpacing: 0.7,
            textAlign: 'auto'
          },
        }} />
        <Drawer.Screen name="5.  Расширенные знания" component={Domination} options={{
          headerTitle: 'Дополнительные технологии',
          headerStyle: {
            backgroundColor: '#9400D3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            letterSpacing: 0.7,
            textAlign: 'auto'
          },
        }} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
