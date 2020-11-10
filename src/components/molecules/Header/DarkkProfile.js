import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDoctor8 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const DarkkProfile = ({ onPress }) => {
    return (
        <View style={styles.containter}>
            <Button
                type="icon-only"
                icon="back-light"
                onPress={onPress}
            />
            <View style={styles.content}>
                <Text style={styles.name}>Dark Header Profile</Text>
                <Text style={styles.desc}>Dokter Anak</Text>
            </View>

            <Image source={DummyDoctor8} style={styles.avatar} />
        </View>
    )
}

export default DarkkProfile

const styles = StyleSheet.create({
    containter: {
        backgroundColor: colors.secondary,
        paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,

    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        marginTop: 6,
        textAlign: 'center',
        color: colors.text.subTitle
    }
})
