import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require("../assets/BeesPark.jpg")} style={{
                height: 60,
                width: 60,
                position: 'absolute',
                left: 30,
                top: 0,
            }} />
            <View style={styles.headerIcons}>
                <Icon name='fire' type='fontisto' size={40} color="black" />
                <Icon name='dots-three-vertical' style={styles.dotsThree} type='entypo' size={40} color="black" />

            </View>


        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 60,
        backgroundColor: "#F49401",
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        position: "absolute",
        left: 0,
        flexDirection: "row",
    },
    headerIcons: {
        position: 'absolute',
        left: 270,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 0,
    },
    dotsThree: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingVertical: 0,
    }
})