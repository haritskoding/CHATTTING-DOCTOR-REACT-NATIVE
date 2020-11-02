import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { DummyDoctor2, ICStar, DummyDoctor4 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={DummyDoctor4} style={styles.avatar} />
                <View style={styles.profile}>
                    <Text style={styles.name}>Teguh</Text>
                    <Text style={styles.category}>Pediactrian</Text>
                </View>
                <View style={styles.rate}>
                    <ICStar />
                    <ICStar />
                    <ICStar />
                    <ICStar />
                </View>
            </View>
        </ScrollView>

    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16
    },
    profile: {
        flex: 1,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 12,

    },
    rate: {
        flexDirection: 'row'
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,

    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2,
    }
})
