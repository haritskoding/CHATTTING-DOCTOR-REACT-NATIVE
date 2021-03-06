import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDoctor8 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Other = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={DummyDoctor8} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.texts}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk ?</Text>
                </View>
                <Text style={styles.date}>4.20 AM</Text>
            </View>

        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        marginBottom: 20,
        alignItems: "flex-end",
        flexDirection: 'row'
    },
    avatar: {
        width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12
    },
    chatContent: {
        maxWidth: '80%',
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderBottomLeftRadius: 0.

    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.white
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        marginTop: 8,
        color: colors.text.secondary
    }
})
