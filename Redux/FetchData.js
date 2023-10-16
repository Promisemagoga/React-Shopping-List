import { createSlice } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../Config/Firebase";


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
      if(index !== -1){
        state.myItems.splice(index,1)
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

export const deleteItem = (id) => async(dispatch) =>{
  try {
    await deleteDoc(doc(db, "myItems",id ))  ;
    dispatch(fetchDataSlice.actions.deleteData(id))
    alert("Item deleted successfully")
  } catch (error) {
      console.log(error);
  }
}

export const {
  fetchDataStart,
  fetchDataFailure,
  fetchDataSuccess,
  deleteData
} = fetchDataSlice.actions;
export default fetchDataSlice.reducer;
