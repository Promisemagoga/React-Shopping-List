import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { doc, updateDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { updateAnItem, updateData } from '../Redux/FetchData'

export default function EditModal({ setOpenModal, updateItem }) {

    const dispatch = useDispatch()
    const updatedData = useSelector(state => state.myItems)
    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState('')
    const [docId, setDcoId] = useState("")

    function closeModal() {
        setOpenModal(false)
    }



    useEffect(() => {
        setItem(updateItem.item)
        setQuantity(updateItem.quantity)
        setDcoId(updateItem.id)

    }, []);


    const handleItemChange = (text) => {
        setItem(text)
    }

    const handleQuantityChange = (text) => {
        setQuantity(text)
    }

    const handleUpdate = () => {
        dispatch(updateAnItem({ item, quantity, docId }))
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
            <Text style={{ marginLeft: "auto", padding: 10, fontSize: 20, fontWeight: "bold" }} onPress={() => setOpenModal(false)}>X</Text>
                <Text style={styles.heading}>Edit your items</Text>
                <TextInput placeholder='Enter Item' style={styles.input} onChangeText={handleItemChange} value={item} />
                <TextInput placeholder='Enter Quantity' style={styles.input} onChangeText={handleQuantityChange} value={quantity} />
                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={styles.btn} >Saving changes</Text>
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

    heading: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: "#2F2F2F"
    },

    form: {
        display: "flex",
        flexDirection: "column",
        rowGap: 30,
    },

    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "#7D7C7C",
        paddingLeft: 10,

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