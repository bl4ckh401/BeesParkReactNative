import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header';
import { WorkOutData } from '../Components/WorkOutData';

const WorkOut = () => {
    const [data, setData] = useState([
        {
            challenge_id: 1,
            challenge: 'Example',
            day1: 'Arms',
            day2: 'Arms',
            day3: 'Arms',
            day4: 'Arms',
            day5: 'Arms',
        },
        {
            challenge_id: 2,
            challenge: 'Example',
            day1: 'Arms',
            day2: 'Arms',
            day3: 'Arms',
            day4: 'Arms',
            day5: 'Arms',
        },
        {
            challenge_id: 3,
            challenge: 'Example',
            day1: 'Arms',
            day2: 'Arms',
            day3: 'Arms',
            day4: 'Arms',
            day5: 'Arms',
        },
        {
            challenge_id: 4,
            challenge: 'Example',
            day1: 'Arms',
            day2: 'Arms',
            day3: 'Arms',
            day4: 'Arms',
            day5: 'Arms',
        },
        {
            challenge_id: 5,
            challenge: 'Example',
            day1: 'Arms',
            day2: 'Arms',
            day3: 'Arms',
            day4: 'Arms',
            day5: 'Arms',
        },
    ])

    // const url = 'https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight';

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    //         'X-RapidAPI-Key': '11f54a005amshd1a227a2ffc8e6ep105e06jsn863cc33fcf8c'
    //     }
    // };

    // fetch(url, options)
    //     .then(res => res.json())
    //     .then(res => {
    //         setData(res)
    //         console.log(data)
    //     })
    //     .catch(err => console.error('error:' + err));
    return (
        <SafeAreaView style={styles.home}>
            <Header />
            <FlatList style={styles.FlatList}
                data={data}
                horizontal
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ height: 200, width: 10, }} />
                    )
                }}
                renderItem={
                    ({ item }) => {
                        return (
                            <View style={styles.Challenges}>
                                <Image source={{ uri: `https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Stiff_Leg_Deadlift-1.gif?h=840` }} style={{ height: 200, width: 200 }} />
                                <View>
                                    <Text>
                                        {item.challenge}
                                    </Text>
                                    <Text>
                                        {item.day1}
                                    </Text>
                                    <Text>
                                        {item.day2}
                                    </Text>
                                    <Text>
                                        {item.day3}
                                    </Text>
                                    <Text>
                                        {item.day4}
                                    </Text>
                                    <Text>
                                        {item.day5}
                                    </Text>
                                </View>
                            </View>
                        )
                    }
                } />
            <ScrollView style={styles.workouts}>
                <View style={styles.Challenges}>
                    <View style={styles.textarea}>
                        <Text>
                            WORK YOUR LEGS AT HOME
                        </Text>
                        <Text>
                            Duration: 1hr
                        </Text>
                        <View style={styles.Intensity}>
                            <Text>INTENSITY</Text>
                            <Text>
                                EASY
                                MEDIUM
                                HARD
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Image source={{ uri: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Stiff_Leg_Deadlift-1.gif?h=840' }} style={{ height: 100, width: 100 }} />
                    </View>
                </View>
                <View style={styles.Challenges}>
                    <View>
                        <Image source={{ uri: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Stiff_Leg_Deadlift-1.gif?h=840' }} style={{ height: 100, width: 100 }} />
                    </View>
                    <View>
                        <Text>
                            ITS CHEST DAY. GET SOME WORK DONE BUDDY
                        </Text>
                        <Text>
                            Duration: 1hr
                        </Text>
                        <View style={styles.Intensity}>
                            <Text>INTENSITY</Text>
                            <Text>
                                EASY
                                MEDIUM
                                HARD
                            </Text>
                        </View>

                    </View>
                </View>
                <View style={styles.Challenges}>
                    <View>
                        <Text>
                            WORK YOUR LEGS AT HOME
                        </Text>
                        <Text>
                            Duration: 1hr
                        </Text>
                        <View style={styles.Intensity}>
                            <Text>INTENSITY</Text>
                            <Text>
                                EASY
                                MEDIUM
                                HARD
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Image source={{ uri: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Stiff_Leg_Deadlift-1.gif?h=840' }} style={{ height: 100, width: 100 }} />
                    </View>
                </View>
                <View style={styles.Challenges}>
                    <View>
                        <Image source={{ uri: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Stiff_Leg_Deadlift-1.gif?h=840' }} style={{ height: 100, width: 100 }} />
                    </View>
                    <View>
                        <Text>
                            WORK YOUR LEGS AT HOME
                        </Text>
                        <Text>
                            Duration: 1hr
                        </Text>
                        <View style={styles.Intensity}>
                            <Text>INTENSITY</Text>
                            <Text>
                                EASY
                                MEDIUM
                                HARD
                            </Text>
                        </View>

                    </View>
                </View>
                <View style={styles.Challenges}>
                    <View>
                        <Text>
                            WORK YOUR LEGS AT HOME
                        </Text>
                        <Text>
                            Duration: 1hr
                        </Text>
                        <View style={styles.Intensity}>
                            <Text>INTENSITY</Text>
                            <Text>
                                EASY
                                MEDIUM
                                HARD
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Image source={{ uri: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/400x400_How_to_do_Zac_Efrons_Baywatch_Workout_Dumbbell_Stiff_Leg_Deadlift-1.gif?h=840' }} style={{ height: 100, width: 100 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WorkOut

const styles = StyleSheet.create({
    home: {
        backgroundColor: "#F49401",
        height: "100%",
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
    },
    FlatList: {
        marginTop: 70,
    },
    workouts: {
        width: "100%",
        marginTop: 20,


    },
    Challenges: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
    }
})