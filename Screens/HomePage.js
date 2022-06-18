import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { HomeData } from '../Components/HomeData'

const HomePage = () => {

    const [posts, setPosts] = useState([])

    const getPosts = () => {
        const requestOptions = {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        }
        fetch('http://127.0.0.1:8000/api/all-posts', requestOptions)
            .then(response => response.json())
            .then((response) => {
                setPosts(response)
                console.log(response)
            })
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <SafeAreaView style={styles.home}>
            <Header style={styles.header} />
            <View>
                <FlatList
                    style={styles.FlatList}
                    data={posts}
                    keyExtractor={(item) => item.post_id}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{ height: 25 }} />
                        )
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                                <Image source={{ uri: item.post }} style={{ height: 300, resizeMode: 'contain', width: 300, }} />
                                <View style={{ height: 40, width: 360, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, backgroundColor: 'black', color: '#F49401' }}>
                                    <Text style={{ color: 'white' }}>{item.post_description}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    home: {
        backgroundColor: "#F49401",
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        marginBottom: 10,
    },
    FlatList: {
        marginTop: 70,
    },
})