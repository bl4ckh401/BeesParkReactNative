import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import GoogleFit, { Scopes } from 'react-native-google-fit';

const Fitness = () => {

    const [user, setUser] = useState({ hasLoggedin: false, accessToken: '' })
    const [dailySteps, setdailySteps] = useState(0);
    const [heartRate, setHeartRate] = useState(0);
    const [calories, setCalories] = useState(0);
    const [hydration, setHydration] = useState(0);
    const [sleep, setSleep] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bloodPressure, setBloodPressure] = useState({});
    const [loading, setLoading] = useState(true);


    return (
        <View>
            <Text>Fitness</Text>
        </View>
    )
}

export default Fitness

const styles = StyleSheet.create({})