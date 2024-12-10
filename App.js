import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FoodListScreen from './src/screens/FoodListScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FoodListScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;