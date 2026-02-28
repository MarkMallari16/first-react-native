import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Button, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function TabTwoScreen() {
  const [count, setCount] = useState<number>(0);

  const goToGithub = async () => {
    const url = "https://github.com/MarkMallari16";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      alert(`Don't know how to open this URL: ${url}`);
    }
  }

  const decrement = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  }

  const reset = () => {
    setCount(0);
  }

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f1f1f1', dark: '#1f1f1f' }}
      headerImage={
        <Image
          source={require('@/assets/images/dubai-chewy.jpg')}
          style={styles.headerImage}
        />}>
      <Image style={styles.logo}
        source={{
          uri: "https://i0.wp.com/everyday.codes/wp-content/uploads/2019/06/react-native-1024x631-1024x631.png?resize=680%2C419&ssl=1"
        }} />
      <View style={styles.iconContainer}>
        <AntDesign name="plus" size={40} color="#f1f1f1" />
        <AntDesign name="minus" size={40} color="#f1f1f1" />
      </View>

      <ThemedText type='title'>Basic Counter App</ThemedText>

      <View style={styles.countContainer}>
        <ThemedText type='title'>{count}</ThemedText>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Decrement'
          color='#ff6467'
          onPress={decrement} />
        <Button title='Reset'
          color='#cccccc'
          onPress={reset} />
        <Button title='Increment'
          color='#50a2ff'
          onPress={increment} />
      </View>

      <View style={styles.githubContainer}>
        <ThemedText type='default'>Follow me on GitHub</ThemedText>
        <TouchableOpacity onPress={goToGithub} >
          <AntDesign name='github' size={20} color='#f1f1f1' />
        </TouchableOpacity>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 5,
  },
  githubContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 20
  },
  logo: {
    width: 66,
    height: 58
  }
});
