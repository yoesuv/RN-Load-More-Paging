import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RootStackParamsList } from './src/screens/root-stack-params';
import Home from './src/screens/home';
import PagingList from './src/screens/paging-list';
import PagingGrid from './src/screens/paging-grid';
import { THEME_COLOR } from './src/data/colors';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const baseOptions: NativeStackNavigationOptions = {
  title: "RN Load More",
  headerStyle: {
    backgroundColor: THEME_COLOR
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  statusBarColor: THEME_COLOR,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{...baseOptions, title: "Home"}} />
        <Stack.Screen name="PagingList" component={PagingList} options={{...baseOptions, title: "Pagination List"}} />
        <Stack.Screen name="PagingGrid" component={PagingList} options={{...baseOptions, title: "Pagination Grid"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
