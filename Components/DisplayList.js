import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native';
import { deleteData, deleteItem, fetchData, updateData } from '../Redux/FetchData';
import BottomNav from './BottomNav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EditModal from './EditModal';
import AddForm from './AddForm';


export default function DisplayList() {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [openAddModal, setOpenAddModal] = useState(false)

    const [updateItem, setUpdateItem] = useState("")
    const { loading, error, myItems } = useSelector((state) => state.myItems)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const handleDelete = (itemId) => {
        dispatch(deleteItem(itemId))
    }



    if (loading) {
        return (
            <View style={styles.container}>
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

    function modal(itemDetails) {
        setUpdateItem(itemDetails)
        setOpenModal(true)
    }



    return (
        <>
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require("../assets/groceries.jpg")} style={styles.banner} >
                    <View style={styles.backgroundColorCont}>
                        <MaterialCommunityIcons name='plus-circle' size={45} color={"#5c913b"} onPress={() => setOpenAddModal(true)} style={styles.nav} />
                    </View>
                </ImageBackground>

                <ScrollView style={styles.scroll}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", marginBottom: 30, color: "#5c913b" }}>My Grocery List</Text>
                    <View style={styles.containerItems}>
                        {myItems.map((data) => (
                            <View key={data.id} style={styles.items}>
                                <Text style={{ fontSize: 16, fontWeight: "300", width: "60%" }}>{data.item}</Text>
                                <Text style={{ fontSize: 16, fontWeight: "300", width: "15%" }}>{data.quantity}</Text>
                                <View style={styles.crud}>
                                    <MaterialCommunityIcons name='pencil' size={25} color={"#FFF"} style={styles.icon} onPress={() => modal(data)} />
                                    <MaterialCommunityIcons name='close' size={25} color={"#FFF"} style={styles.icon} onPress={() => handleDelete(data.id)} />
                                </View>
                            </View>
                        ))}
                    </View>

                </ScrollView>

            </SafeAreaView>
            {openModal && <View style={styles.addMod}><EditModal setOpenModal={setOpenModal} updateItem={updateItem} /></View>}
            {openAddModal && <View style={styles.addMod}><AddForm setOpenAddModal={setOpenAddModal} /></View>}
        </>
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
        paddingRight: 20,
        marginLeft: "auto",
        marginTop: 50,
        zIndex: 10
    },

    containerItems: {
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
        padding: 20,
        marginTop: "auto"
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
        marginTop: 60,
        width: "100%"
    },

    crud: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "25%"
    },

    icon: {
        backgroundColor: "#5c913b",
        width: 30,
        height: 30,
        borderRadius: 100,
        textAlign: "center"
    },

    banner: {
        width: "100%",
        height: 150
    },

    backgroundColorCont: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 150
    },

    addMod: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: "100%",
        height: "100%",
        zIndex: 20,
        justifyContent:"center",
        alignItems:"center"
    }
})