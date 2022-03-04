// import React from 'react';
//  import {
//    StyleSheet,
//    Text,
//    useColorScheme,
//    View,
//  } from 'react-native';
 
//  import {
//    Colors,
//  } from 'react-native/Libraries/NewAppScreen';
// import SingIn from './Screen/signin'; 
 
//  const App = () => {
//    const isDarkMode = useColorScheme() === 'dark';
 
//    const backgroundStyle = {
//      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//    };
 
//    return (
//      <View style={styles.sectionContainer}>
//        <Text style={styles.sectionTitle}>Mom'S Shopping List</Text>
//        <View><SingIn/></View>
      
//        </View>
//    )
//  };
 
//  const styles = StyleSheet.create({
//    sectionContainer: {
//      marginTop: 100,
//      paddingHorizontal: 24,
//      alignItems:'center',
//    },
//    sectionTitle: {
//      fontSize: 24,
//      fontWeight: '600',
//      color:'green',
    
//    },
//    sectionDescription: {
//      marginTop: 8,
//      fontSize: 18,
//      fontWeight: '400',
//    },
//    highlight: {
//      fontWeight: '700',
//    },
//  });
 
//  export default App;


 import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingIn from './Screen/signin';
import Registration from './Screen/registration';
 import Dashboard from './Screen/dashboard';
 import StoreItem from './Screen/stoteItem'
 import Items from './Screen/items';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="SingIn">
        <Stack.Screen name="SignIn" component={SingIn} />
        <Stack.Screen name="Create an account" component={Registration} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="StoreItems" component={StoreItem} />
        <Stack.Screen name="Items" component={Items} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
 