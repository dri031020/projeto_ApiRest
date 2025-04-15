// apg.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Loader from '@/src/components/loader';
import List from '@/src/components/list';

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (response.data.categories) {
          setCategories(response.data.categories);
        } else {
          setCategories([]);
        }
      } catch (e: any) {
        setError(e.message || 'Erro ao buscar dados.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Loader />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: {error}</Text>
      </View>
    );
  }

  const handleCategoryPress = (category: Category) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* Barramento com imagem */}
      <ImageBackground
        source={require('@/assets/images/image.png')}
        style={styles.topBanner}
        resizeMode="cover"
      />

      {/* Botão de Voltar */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>🍽️ Categorias de Refeições</Text>

      <List categories={categories} onCategoryPress={handleCategoryPress} />

      <Modal visible={modalVisible} animationType="slide">
        <ScrollView contentContainerStyle={styles.modalContainer}>
          {selectedCategory && (
            <>
              <Text style={styles.modalTitle}>{selectedCategory.strCategory}</Text>
              <Image source={{ uri: selectedCategory.strCategoryThumb }} style={styles.modalImage} />
              <Text style={styles.modalDescription}>{selectedCategory.strCategoryDescription}</Text>
            </>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F3',
    paddingHorizontal: 16,
  },
  topBanner: {
    width: '100%',
    height: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#005954',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#E0D4F7',
    borderRadius: 12,
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#005954',
  },
  modalContainer: {
    flexGrow: 1,
    backgroundColor: '#FDF6FD',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#005954',
    textAlign: 'center',
  },
  modalImage: {
    width: 220,
    height: 220,
    borderRadius: 15,
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
  },
  closeButton: {
    marginTop: 30,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#E0D4F7',
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#005954',
  },
});

export default CategoryList;
