import { ThemedText } from '@/components/themed-text';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { Button, Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

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
    <ScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* <View style={styles.iconContainer}>
          <AntDesign name="plus" size={40} color="#11181C" />
          <AntDesign name="minus" size={40} color="#11181C" />
        </View> */}

        <ThemedText type='title' lightColor="#11181C" darkColor="#11181C">Basic Counter App</ThemedText>

        <View style={styles.countContainer}>
          <ThemedText type='title' lightColor="#11181C" darkColor="#11181C">{count}</ThemedText>
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
          <ThemedText type='default' lightColor="#11181C" darkColor="#11181C">Follow me on GitHub</ThemedText>
          <TouchableOpacity onPress={goToGithub} >
            <AntDesign name='github' size={20} color='#11181C' />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
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
  countText: {
    color: '#11181C',
    fontSize: 100,
    fontFamily: 'Poppins_700Bold',
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

