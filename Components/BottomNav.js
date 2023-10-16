import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';



export default function BottomNav() {
  const navigation = useNavigation()

 
  return (
    <View style={styles.BottomNav}>
      <MaterialCommunityIcons name='home' size={45} color={"#2F2F2F"} style={styles.icon} onPress={() => navigation.navigate("AddForm")} />
      <MaterialCommunityIcons name='plus-circle' size={45} color={"#2F2F2F"} style={styles.icon}  onPress={() => navigation.navigate("AddForm")}/>
      <MaterialCommunityIcons name='view-list' size={45} color={"#2F2F2F"} style={styles.icon}  onPress={() => navigation.navigate("display")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  BottomNav: {
    marginTop: "auto",
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  }

})