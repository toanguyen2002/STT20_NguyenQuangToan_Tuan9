import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Dimensions } from 'react-native'
import { Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const Layout2 = () => {
    const [data, setData] = useState([])
    const nav = useNavigation()
    useEffect(() => {
        const getData = async () => {
            const datas = await axios.get(`https://65445a9c5a0b4b04436c47d7.mockapi.io/all/name`)
            setData(datas.data)
        }
        getData()
    }, [])
    const width = Dimensions.get('window').width
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {data.map((item, index) => (
                <Pressable key={index} onPress={() => nav.navigate('layout3', item)}>
                    <View style={{ backgroundColor: 'white', width: width - 20, height: 180, marginVertical: 20 }}>
                        <Image source={{ uri: item.img }} style={{ width: width - 20, height: 100, }} />
                        {item.status ?
                            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                                <View style={{ width: 130, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'green' }}>√ Accepting Orders</Text>
                                </View>
                                <View style={{ width: 130, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'red' }}>5-10 minutes</Text>
                                </View>
                                <MaterialIcons name="location-on" size={24} color="green" />
                            </View> :
                            <View>
                                <View style={{ width: 130, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'green' }}>√ Accepting Orders</Text>
                                </View>
                            </View>}

                        <Text style={{ marginVertical: 5, fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>{item.name}</Text>
                        <Text style={{ color: '#aaa', marginLeft: 20 }}>{item.address}</Text>
                    </View>
                </Pressable>
            ))
            }
        </View >
    )
}

export default Layout2

const styles = StyleSheet.create({})