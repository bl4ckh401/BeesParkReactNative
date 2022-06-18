import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const CSRFToken = () => {

    const [csrf, setcsrf] = useState('')

    function getCookie(name) {
        let cookieValue = '';
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    useEffect(() => {
        const fetchData = async () => {
            fetch("http://192.168.43.54:8000/api/getcsrf")
        }
        fetchData()
        setcsrf(getCookie('csrftoken'))
    }, [])

    return (
        <View>
            <TextInput value={csrf} style={styles.hiddenText} />
        </View>
    )
}

export default CSRFToken

const styles = StyleSheet.create({
    hiddenText: {
        display: 'none'
    }
})