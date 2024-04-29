import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const list = [
    {
        name: 'Home',
        screen: 'HomeScreen'
    },
    {
        name: 'Map',
        screen: 'MapScreen'
    }
]

export default function HomeScreen() {
    const navigate = useNavigation();

    return (
        <View>
            <StatusBar barStyle={'dark-content'} />
            <Text>HomeScreen</Text>
            <FlatList
                data={list}
                renderItem={(item) => {

                    <TouchableOpacity
                        onPress={() => navigate.navigate(item.screen)} >
                        <Text>{item.name}</Text>
                    </TouchableOpacity>

                }}
            ></FlatList>
        </View>
    )
}