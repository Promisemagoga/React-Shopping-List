import { StyleSheet, Text, View } from 'react-native'
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
        console.log("check the item information for me:", updateItem.id);
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
        dispatch(updateAnItem({item,quantity,docId}))
        // console.log(item);
        // console.log(quantity);

    }


    return (
        <View style={styles.form}>
            <Text onPress={closeModal}>X</Text>
            <TextInput placeholder='Enter Item' style={styles.input} onChangeText={handleItemChange} value={item} />
            <TextInput placeholder='Enter Quantity' style={styles.input} onChangeText={handleQuantityChange} value={quantity} />
            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                <Text style={styles.btn} >Saving changes</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        display: "flex",
        flexDirection: "column",
        rowGap: 30,
        marginTop: 100,
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