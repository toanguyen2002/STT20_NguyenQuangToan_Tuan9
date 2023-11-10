import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Layout1 = () => {
    const nav = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ width: 272, height: 36, fontSize: 25, fontWeight: 'bold' }}>Welcome to Cafe world</Text>
            <Image source={require('../assets/Image.png')} style={{ width: 330, height: 50, marginVertical: 50 }} />
            <Image source={require('../assets/Image2.png')} style={{ width: 330, height: 50, marginVertical: 50 }} />
            <Image source={require('../assets/Image2.png')} style={{ width: 330, height: 50, marginVertical: 50 }} />
            <Pressable onPress={() => nav.navigate('layout2')} style={{ width: 330, height: 50, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>GET STARTED</Text>
            </Pressable>
        </View>
    )
}

export default Layout1

const styles = StyleSheet.create({})