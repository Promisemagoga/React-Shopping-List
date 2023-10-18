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
            <Text style={{fontSize: 40,marginTop:20,fontWeight: "bold", color:"#5c913b"}}>Shoping-List</Text>
            <Text style={{ color: "#000", fontSize: 18, marginTop: 20, width:310,fontWeight: "200",textAlign: "center" }}>Create shopping list to make your shopping  easier!</Text>
            <View>
                <TouchableOpacity style={styles.getStarted} onPress={() => navigation.navigate("display")}>
                    <Text style={styles.getStartedText}>PROCCEED</Text>
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
        // borderBottomRightRadius: 150,
        // borderBottomLeftRadius: 150

    },

    getStarted: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 50,
        justifyContent: "center",
        // justifyContent: "space-around",
        marginTop: 60,
        backgroundColor: '#5c913b',
        width: 310,
        height: 65,
        borderRadius: 20

    },

    getStartedText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        // marginLeft:-20
    },

icon:{
    // marginRight:-30
},


});
