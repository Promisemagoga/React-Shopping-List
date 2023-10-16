import { createSlice,nanoid } from "@reduxjs/toolkit";
import { db } from "../Config/Firebase";
import { Alert } from "react-native";
import { addDoc, collection } from "firebase/firestore";


export const addDataSlice = createSlice({
    //from line 8 to line 23 it  is my slice
    name: "list",
    initialState: {
        myItems: []
    },

    //reducers are used to update the intialState and they contain actions
    reducers: {
        addItem: (state, action) => {
            try {
                //action the type of action that needs to be done,
                //payload it is the data carried by action
                const docRef = addDoc(collection(db, "myItems"), action.payload)
                Alert.alert("Item added successfully")
            } catch (error) {
                console.log(error);
            }
        }
    }
})

export const { addItem } = addDataSlice.actions;
export default addDataSlice.reducer