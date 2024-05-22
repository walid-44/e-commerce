import { createSlice } from "@reduxjs/toolkit";


const initialState ={
  isLoggedIn : false,
  email : null ,
  useName : null,
  userID : null,
}
const authSlice = createSlice({
  name : "auth",
  initialState,
  reducers: {
    setActiveUser :(state , action) => {
      console.log(action.payload);
      const {email , useName , userID} = action.payload ;
      state.isLoggedIn = true;
      state.email = email;
      state.useName = useName;
      state.userID = userID;
    } ,
    setRemoveUser : (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.useName = null;
      state.userID = null;
    } ,

  },
})
export const {setActiveUser , setRemoveUser} = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;
export const selectUseName = (state) => state.auth.useName;
export const selectUserID = (state) => state.auth.userID;
export default authSlice.reducer;