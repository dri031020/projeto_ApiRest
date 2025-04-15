// list.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface ListProps {
  categories: Category[];
  onCategoryPress: (category: Category) => void;
}

const List: React.FC<ListProps> = ({ categories, onCategoryPress }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.idCategory}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onCategoryPress(item)} style={styles.categoryItem}>
          <Image source={{ uri: item.strCategoryThumb }} style={styles.categoryImage} />
          <Text style={styles.categoryName}>{item.strCategory}</Text>
        </TouchableOpacity>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default List;