import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>

            <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{ uri: "https://avatars.githubusercontent.com/u/104248911?v=4" }} />
            </View>

            <Text style={styles.title}>Mark Christian Mallari</Text>
            <Text style={styles.subtitle}>Fullstack Web Developer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        paddingHorizontal: 20,
    },
    title: {
        marginTop: 10,
        fontSize: 30,
        fontFamily: 'Poppins_700Bold',
        color: '#111827',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: '#6b7280',
    },
    avatarContainer: {
        marginTop: 30
    },
    avatar: {
        width: 120,
        height: 120,
        borderBlockColor: '#1f1f1f',
        borderWidth: 2,
        borderRadius: 60
    },
    
});
