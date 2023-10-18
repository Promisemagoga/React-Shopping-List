import { createSlice } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../Config/Firebase";
import { Alert } from "react-native";


const initialState = {
  loading: false,
  error: null,
  myItems: [],
};

export const fetchDataSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.myItems = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteData: (state, action) => {
      const index = state.myItems.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.myItems.splice(index, 1)
      }
    },
    updateData: (state, action) => {
      try {
        const index = state.myItems.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.myItems[index] = action.payload;
        }
        console.log("Item updated successfully1");

      } catch (error) {
        console.log(error);
      }
    }
  },
});



export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataSlice.actions.fetchDataStart());
  try {
    const querySnapshot = await getDocs(collection(db, "myItems"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(fetchDataSlice.actions.fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataSlice.actions.fetchDataFailure(error.message));
  }
};

export const deleteItem = (id) => async (dispatch) => {
  console.log(id);
  try {
    await deleteDoc(doc(db, "myItems", id));
    dispatch(fetchDataSlice.actions.deleteData(id))
    Alert.alert("Item deleted successfully")
  } catch (error) {
    console.log(error);
  }
}

export const updateAnItem = (updatedItem) => async (dispatch) => {
  console.log("check updatedItem:",updatedItem);

  const item = {
    item: updatedItem.item,
    quantity: updatedItem.quantity
  }
  try {
    await updateDoc(doc(db, "myItems", updatedItem.docId), item);
    dispatch(fetchDataSlice.actions.updateData(updatedItem));
    console.log("Item updated successfully2");
  } catch (error) {
    console.log(error);
  }
};

export const {
  fetchDataStart,
  fetchDataFailure,
  fetchDataSuccess,
  deleteData,
  updateData
} = fetchDataSlice.actions;
export default fetchDataSlice.reducer;
