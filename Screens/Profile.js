import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const Profile = () => {
    return (
        <SafeAreaView>
            <Header />
            <View style={styles.UserDetails}>
                <View stle={styles.ProfilePic}>
                    <Image source={reuire("../assets/Pavin.jpeg")} style={styles.Image} />
                </View>
                <View>
                    <Text>JOHN DOE</Text>
                    <TouchableOpacity>
                        <View>
                            <Text>Edit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <FlatList data={userData}
                    keyExtractor={item => item.id}
                    style={styles.Flatlist}
                    ItemSeparatorComponent={() => {
                        return (
                            <View syle={{ height: 40, width: "100%" }} />
                        )
                    }}
                    renderItem={({ item }) => {
                        <View>
                            <Text>{item.heading}</Text>
                            <View>
                                <Text>{item.subheading}</Text>
                                <Text>{item.description}</Text>
                            </View>
                        </View>
                    }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    UserDetails: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 70,
    }
})