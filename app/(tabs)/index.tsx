import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>You are now inside the tab screens.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    color: '#111827',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#6b7280',
  },
});
