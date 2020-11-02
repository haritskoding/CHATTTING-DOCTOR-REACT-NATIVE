import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1 } from '../../assets'
import { Header, ListDoctor } from '../../components'

const ChooseDoctor = () => {
    return (
        <View style={styles.page}>
            <Header type="dark" title="Pilih Dokter Anak" />
            <ListDoctor type="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" />
            <ListDoctor type="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" />
            <ListDoctor type="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" />
            <ListDoctor type="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" />
            <ListDoctor type="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" />
            <Text>Choose a Doctor Page</Text>
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 }
})
