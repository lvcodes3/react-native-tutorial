import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href='/home' style={{ color: 'blue' }}>Go to Home</Link>
    </View>
  );
}
