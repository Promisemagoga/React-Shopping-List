import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native';
import { deleteData, deleteItem, fetchData, updateData } from '../Redux/FetchData';
import BottomNav from './BottomNav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EditModal from './EditModal';


export default function DisplayList() {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [updateItem, setUpdateItem] = useState("")
    const { loading, error, myItems } = useSelector((state) => state.myItems)
    console.log("what's inside:", useSelector((state) => state.myItems));
   

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const handleDelete = (itemId) => {
        dispatch(deleteItem(itemId))
    }



    if (loading) {
        return (
            <View>
                <Text> Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View>
                <Text> Error: {error}</Text>
            </View>
        );
    }

    function modal(itemDetails){
        console.log("see the item DETAILS:", itemDetails);
        setUpdateItem(itemDetails)
        setOpenModal(true)
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <MaterialCommunityIcons name='arrow-left-thick' size={35} color={"#2F2F2F"} style={styles.icon} onPress={() => navigation.navigate("AddForm")} />
                <Text style={{ fontSize: 20, fontWeight: "400" }}>My Grocery List</Text>
                <MaterialCommunityIcons name='cart-variant' size={35} color={"#2F2F2F"} style={styles.icon} onPress={() => navigation.navigate("AddForm")} />
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.containerItems}>
                    {myItems.map((data) => (
                        <View key={data.id} style={styles.items}>
                            <Text style={{ fontSize: 16, fontWeight: "300" }}>{data.item}</Text>
                            <Text style={{ fontSize: 16, fontWeight: "300" }}>{data.quantity}</Text>
                            <View style={styles.crud}>
                                <MaterialCommunityIcons name='pencil' size={25} color={"#2F2F2F"} style={styles.icon} onPress={() => modal( data)} />
                                <MaterialCommunityIcons name='close' size={25} color={"#2F2F2F"} style={styles.icon} onPress={() => handleDelete(data.id)} />

                            </View>
                        </View>
                    ))}
                    {openModal && <EditModal setOpenModal={setOpenModal} updateItem={updateItem}/>}
                </View>
            </ScrollView>
            <BottomNav />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center"
    },

    nav: {
        width: "100%",
        marginTop: 20,
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    containerItems: {
        marginTop: "auto",
        width: "100%",
        alignItems: 'center',
        padding: 20
    },

    items: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#D4D4D4",
        height: 70,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 5,
        padding: 20
    },

    scroll: {
        marginTop: 30,
        width: "100%"
    },

    crud: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "blue",
        width: 80
    }
})