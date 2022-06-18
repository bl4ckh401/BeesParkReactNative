import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SignUp from './SignUp'
import { useNavigation } from '@react-navigation/native'
import CSRFToken from '../Components/CSRFToken'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [passWord, setPassword] = useState("")
    const [user, setUser] = useState({})

    const navigation = useNavigation()

    const login = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', 'Accept': 'application/json, text/ plain, */*'
            },
            body: JSON.stringify({
                username: userName,
                password: passWord,
            })
        }
        fetch('http://192.168.139.251:8000/accounts/google/login/?process=login', requestOptions)
            .then(response => response.text())
            .then((response) => {
                setUser(response)
                console.log(response)
            })
    }


    return (
        <SafeAreaView style={styles.login}>
            <View>
                <CSRFToken />
                <View>
                    <Text>
                        Login
                    </Text>
                    <TextInput placeholder='UserName or Email'
                        onChangeText={(value) => {
                            setUserName(value)
                            console.log(value)
                        }}
                        style={styles.userInput} />
                    <TextInput placeholder='Password'
                        onChangeText={(value) => {
                            setPassword(value)
                        }}
                        secureTextEntry={true}
                        style={styles.userInput} />
                    <TouchableOpacity style={styles.loginBtn} onPress={login}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <Text>Don't have an account yet?</Text>
                    <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('SignUp')}>
                        <Text>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    login: {
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#F49401",
    },
    userInput: {
        marginTop: 10,
        backgroundColor: "azure",
        width: 360,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        height: 40,
    },
    loginBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 21,
        borderColor: 'white',
        color: 'white',
        marginTop: 10,
    },
    signUpBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F49401',
        borderColor: 'black',
        borderWidth: 2,
        padding: 20,
        marginTop: 10,
        color: 'black',
        borderRadius: 21,
    },
})