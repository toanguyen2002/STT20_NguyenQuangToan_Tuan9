import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Layout2 from './component/Layout2';
import Layout3 from './component/Layout3';
import Layout1 from './component/Layout1';
import Layout4 from './component/Layout4';
export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Layout1} name='layout1' />
        <Stack.Screen component={Layout2} name='layout2' />
        <Stack.Screen component={Layout3} name='layout3' />
        <Stack.Screen component={Layout4} name='layout4' />
      </Stack.Navigator>
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
