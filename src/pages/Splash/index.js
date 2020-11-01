import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ILLogo } from '../../assets'
import { colors, fonts } from '../../utils'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted') //replace tidak menyimppan navigasi halaman kalau navigate menyimpan
        }, 2500)
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

export default Splash;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 20
    }
})