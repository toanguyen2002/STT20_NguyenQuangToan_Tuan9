import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Dimensions } from 'react-native'
import { Image } from 'react-native'
import { Pressable } from 'react-native'

const Layout4 = () => {
    const rou = useRoute()
    const nav = useNavigation()
    console.log(rou.params?.drinks);
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ padding: 10, backgroundColor: 'rgba(0, 189, 214, 1)', width: 340, height: 100, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>CAFE DELIVERY</Text>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Order #18</Text>
                </View>

                <View>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>$5</Text>
                </View>
            </View>
            <View style={{ padding: 10, backgroundColor: 'rgba(0, 189, 214, 1)', width: 340, marginTop: 10, height: 100, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>CAFE DELIVERY</Text>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Order #18</Text>
                </View>

                <View>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>$5</Text>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                {rou.params?.drinks.map((item, index) => (
                    <View key={index}
                        style={{
                            width: Dimensions.get("window").width - 30,
                            height: 70,
                            borderWidth: 1,
                            borderColor: 'gray',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5
                        }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 350 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={{ uri: item.img }} style={{ width: 70, height: 70, resizeMode: 'contain', }} />
                                <View style={{ marginLeft: 10, justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                <View style={{ width: 30, height: 30, borderRadius: 100, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>-</Text>
                                </View>
                                <View style={{ marginLeft: 30, width: 30, height: 30, borderRadius: 100, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>+</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
            <Pressable onPress={() => nav.navigate('layout2',)} style={{ width: 330, height: 50, backgroundColor: 'rgba(239, 176, 52, 1)', justifyContent: 'center', alignItems: 'center', marginTop: 65 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>PAY NOW</Text>
            </Pressable>
        </View>
    )
}

export default Layout4

const styles = StyleSheet.create({})