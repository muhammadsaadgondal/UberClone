import { View, Text, FlatList, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';


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

            <Text>HomeScreen</Text>
            <SafeAreaView>

                <FlatList
                    data={list}
                    renderItem={({ item }) => {
                        return <TouchableOpacity style={{ padding: 10, margin: 10, backgroundColor: 'pink', width: '50%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
                            onPress={() => navigate.navigate(item.screen)} >
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>

                    }}
                />
            </SafeAreaView>
        </View>
    )
}