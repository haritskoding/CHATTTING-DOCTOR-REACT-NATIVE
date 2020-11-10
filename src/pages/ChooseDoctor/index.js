import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1 } from '../../assets'
import { Header, List } from '../../components'
import { colors } from '../../utils'

const ChooseDoctor = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header type="dark" title="Pilih Dokter Anak" onPress={() => navigation.goBack()} />
            <List
                type="next"
                profile={DummyDoctor1}
                name="Alexander Janie"
                desc="Wanita"
                onPress={() => navigation.navigate('Chat')}
            />
            <List
                type="next"
                profile={DummyDoctor1}
                name="Teguh Muhammad Harits"
                desc="Pria"
                onPress={() => navigation.navigate('Chat')}
            />
            <List
                type="next"
                profile={DummyDoctor1}
                name="Setiabudi"
                desc="Wanita"
                onPress={() => navigation.navigate('Chat')}
            />
            <List
                type="next"
                profile={DummyDoctor1}
                name="Alexander Janie"
                desc="Wanita"
                onPress={() => navigation.navigate('Chat')}
            />
            <List
                type="next"
                profile={DummyDoctor1}
                name="Alexander Janie"
                desc="Wanita"
                onPress={() => navigation.navigate('Chat')}
            />
            <Text>Choose a Doctor Page</Text>
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 }
})
