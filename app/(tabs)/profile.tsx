import ParallaxScrollView from '@/components/parallax-scroll-view'
import { ThemedText } from '@/components/themed-text'
import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function ProfileScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1f1f1f' }}
            headerImage={
                <Image
                    style={styles.androidIcon}
                    source={require('@/assets/images/android-icon-background.png')}
                />
            }>
            <ThemedText type='title'>This is profile Screen</ThemedText>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    androidIcon: {
        height: 400,
        width: 400,
        bottom: 0,
        left: 0,
    },

})