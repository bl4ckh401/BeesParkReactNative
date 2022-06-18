import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Login from './Login'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
    const navigation = useNavigation()


    const signup = () => {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }

        fetch('http://192.168.43.54:8000/accounts/signup', requestOptions)
            .then(response => response.json())
            .then((response) => {
                setUser(response)
                console.log(response)
            })
    }

    // useEffect(() => {
    //     signup()
    // }, [])

    return (
        <SafeAreaView style={styles.SignUp}>
            <View>
                <View>
                    <Text>
                        Sign up
                    </Text>
                </View>
                <View>
                    <TextInput placeholder='Email'
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
                    <TextInput placeholder='Confirm Password'
                        onChangeText={(value) => {
                            setPassword(value)
                        }}
                        secureTextEntry={true}
                        style={styles.userInput} />
                </View>
                <View>
                    <TouchableOpacity style={styles.signUpBtn} onPress={signup}>
                        <Text>Sign up</Text>
                    </TouchableOpacity>

                    <Text>Already have an account?</Text>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate(Login)}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    SignUp: {
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
        marginVertical: 10,
        color: 'black',
        borderRadius: 21,
    },
})