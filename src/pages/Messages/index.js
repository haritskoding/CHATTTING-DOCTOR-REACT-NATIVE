import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor4, DummyDoctor2, DummyDoctor3, Hospital1, DummyDoctor1 } from '../../assets'
import { ListDoctor } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = () => {
    const [doctors] = useState([
        {
            id: 1,
            profile: DummyDoctor4,
            name: 'Alexander Jennie',
            desc: 'Baik bu terimakasih banyak atas wakt..',
        },
        {
            id: 2,
            profile: DummyDoctor1,
            name: 'Nairobby Hyza',
            desc: 'Oh tentu saja tidak karena jeruk ti...',
        },
        {
            id: 3,
            profile: DummyDoctor3,
            name: 'M. Haidar Pangestu',
            desc: 'Baik bu terimakasih banyak atas waktunya',
        },
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {
                    doctors.map(doctor => {
                        return (
                            <ListDoctor
                                key={doctor.id}
                                profile={doctor.profile}
                                name={doctor.name}
                                desc={doctor.desc} />
                        )
                    })
                }
                {/* <ListDoctor />
                <ListDoctor />
                <ListDoctor /> */}
            </View>

        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.secondary
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 39,
        marginLeft: 16,

    }
})
