import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <ThemedView style={{flex:1}}>
      <SafeAreaView>
      <ThemedText>hey this is home</ThemedText>
      </SafeAreaView>
      
    </ThemedView>
  );
}

const styles = StyleSheet.create({
      
});