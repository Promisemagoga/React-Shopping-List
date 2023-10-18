import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import BottomNav from './BottomNav'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Redux/addData'
import { useEffect } from 'react'

export default function AddForm({ setOpenAddModal }) {
    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(addItem({ item, quantity }))
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ marginLeft: "auto", padding: 10, fontSize: 20, fontWeight: "bold" }} onPress={() => setOpenAddModal(false)}>X</Text>
            <Text style={styles.heading}>Add items to your list</Text>
            <Image source={require("../assets/flat.webp")} style={styles.icon} />
            <View style={styles.form}>
                <TextInput placeholder='Enter Item' style={styles.input} onChangeText={(event) => setItem(event)} />
                <TextInput placeholder='Enter Quantity' style={styles.input} onChangeText={(event) => setQuantity(event)} />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.btn}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "84%",
        height: "auto",
        marginHorizontal: "8%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 20,
        borderRadius: 30
    },


    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: "#7D7C7C",
        paddingLeft: 10,
        borderRadius: 50,

    },

    heading: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: "#2F2F2F",
    },

    form: {
        display: "flex",
        flexDirection: "column",
        rowGap: 30,
        marginTop: 100,
        marginBottom: 20
    },

    icon: {
        marginTop: 80,
        width: 200,
        height: 200
    },

    button: {
        backgroundColor: "#5c913b",
        width: 150,
        height: 40,
        borderRadius: 50
    },

    btn: {
        color: "#fff",
        textAlign: 'center',
        marginTop: "auto",
        marginBottom: "auto",
        fontSize: 19
    }
})