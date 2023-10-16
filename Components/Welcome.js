import { StyleSheet, Image, Text, View, SafeAreaView, } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Welcome() {

    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/firstPage.webp")} style={styles.mainImage} />
            <Text style={{ color: "#000", fontSize: 20, marginTop: 20, padding: 20 }}>Create shopping list to make your shopping  easier</Text>
            <View>
                <TouchableOpacity style={styles.getStarted} onPress={() => navigation.navigate("AddForm")}>
                    <Text style={styles.getStartedText}>GET STARTED</Text>
                    <MaterialCommunityIcons name='arrow-right' size={30} color={"#fff"} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    mainImage: {
        height: 500,
        width: "100%",
        borderBottomRightRadius: 150,
        borderBottomLeftRadius: 150

    },

    getStarted: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 50,
        backgroundColor: '#5c913b',
        width: 280,
        height: 70,
        borderRadius: 20

    },

    getStartedText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 19
    },




});
