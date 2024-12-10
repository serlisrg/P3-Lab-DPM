import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FoodItem from '../components/FoodItem';

const FoodListScreen = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: 'Dimsum', image: require('../../assets/foto2.jpg') },
    { id: 2, name: 'Pizza', image: require('../../assets/foto4.jpg') },
    { id: 3, name: 'Donat', image: require('../../assets/foto3.jpg') },
  ]);

  const handleDelete = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FoodItem
            name={item.name}
            image={item.image}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  list: {
    paddingBottom: 20,
  },
});

export default FoodListScreen;