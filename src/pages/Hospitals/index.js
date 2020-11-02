import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Hospital1, ILHospital ,Hospital2,Hospital3} from '../../assets'
import { ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospital} style={styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.desc}>3 Tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital type="Rumah Sakit" name="Citra Bunga Merdeka" address="Jln Surya sejahtera1" pic={Hospital1} />
                <ListHospital type="Rumah Sakit Jiwa" name="RSUD Grogol address" address="Jln Raya Grogol " pic={Hospital2} />
                <ListHospital type="Rumah Sakit Bersalin" name="RS Ibu dan anak" address="Jln Ciputat" pic={Hospital3} />
            </View>

        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    background: {
        height: 240,
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center',

    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        marginTop: -30,
        paddingTop: 14
    }
})
