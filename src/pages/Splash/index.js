import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ILLogo } from '../../assets'

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted') //replace tidak menyimppan navigasi halaman kalau navigate menyimpan
        }, 3000)
    }, [navigation])

    return (
        <View
            style={styles.page}
        >
            <ILLogo />
            <Text
                style={styles.title}
            >
                Aris Dokter
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
        marginTop: 20
    }
})