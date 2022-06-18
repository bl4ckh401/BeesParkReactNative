import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TopLifters, TopStreakers } from '../Components/LeaderBoardData'
import Header from '../Components/Header'

const LeaderBoard = () => {
    return (
        <SafeAreaView style={styles.home}>
            <Header />
            <View style={styles.flatContainer}>
                <FlatList data={TopLifters}
                    style={styles.FlatList}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{ borderBottomWidth: 2, borderBottomColor: "black", }} />
                        )
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <View style={styles.ItemContainer}>
                                    <Text>{item.id}. </Text>
                                    <Text>{item.name}</Text>
                                </View>
                            </View>
                        )
                    }} />
            </View>
            <View style={styles.flatContainer}>
                <FlatList data={TopStreakers}
                    style={styles.FlatList}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{ borderBottomWidth: 2, borderBottomColor: "black", }} />
                        )
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <View style={styles.ItemContainer}>
                                    <Text>{item.id}.  </Text>
                                    <Text>{item.name}</Text>
                                </View>
                            </View>
                        )
                    }} />
            </View>

        </SafeAreaView>
    )
}

export default LeaderBoard

const styles = StyleSheet.create({
    home: {
        backgroundColor: "#F49401",
        alignItems: 'flex-start',
        height: "100%",
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
    },
    flatContainer: {
        backgroundColor: "black",
        opacity: 0.4,
        height: 110,
        marginTop: 70,
        borderRadius: 10,
        width: "100%"


    },
    FlatList: {
        width: 600,
        color: 'white',
    },
    ItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: 5,
    }
})