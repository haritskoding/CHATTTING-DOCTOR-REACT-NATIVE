import React from 'react'
import { Text, View } from 'react-native'

const Gap = ({ height, width }) => {
    return (
        <View style={{ height: height, width: width }}>
            <Text></Text>
        </View>
    )
}

export default Gap;