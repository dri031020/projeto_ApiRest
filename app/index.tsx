import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, ImageBackground, Dimensions, Text, Pressable, Platform } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get('window');

export default function Home() {
  const [fontsLoaded] = useFonts({
    'Poppins_Regular': require('@/assets/fonts/poppins/Poppins-Regular.ttf'),
    'Poppins_Bold': require('@/assets/fonts/poppins/Poppins-Bold.ttf')
  });

  const router = useRouter();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <ImageBackground
          source={require('@/assets/images/image.png')}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Bem Vindo!{"\n"}Veja suas Receitas
        </Text>

        <Pressable onPress={() => router.push('./content')} style={({ pressed }) => [
          styles.button,
          { opacity: pressed ? 0.8 : 1 }
        ]}>
          <Text style={styles.buttonText}>Ir para Minhas Receitas</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FBE3E3",
  },
  header: {
    flex: 0.3,
    width: '100%',
  },
  headerImage: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 0.7,
    backgroundColor: "#EEDAE5",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: Platform.OS === 'ios' ? 40 : 30,
  },
  title: {
    fontFamily: 'Poppins_Bold',
    fontSize: width < 360 ? 26 : 32,
    textAlign: 'center',
    color: '#005954',
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    fontFamily: 'Poppins_Bold',
    fontSize: width < 360 ? 14 : 16,
    color: '#333',
  }
});
