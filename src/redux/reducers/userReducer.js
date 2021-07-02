import { createSlice } from "@reduxjs/toolkit";

const initialState={
  username:null,
  email:null,
  status:false,
  err:false,
  errmessage:[]
}

export const userSlice = createSlice({
  name: "userReducer",
  initialState: initialState,
  reducers: {
      authUser:(state,action)=>{
        //   console.log(action.payload)
          const {name,email,type}=action.payload;
          console.log(name,email,type)
        if(type==='LOG_IN'){
            state.username=name;
            state.email=email;
            state.status=true;
        }
        if(type==='LOG_OFF'){
            state.username=null;
            state.email=null;
            state.status=false;
        }
      }
    
  },
});

// Action creators are generated for each case reducer function
export const {  authUser} = userSlice.actions;

export default userSlice.reducer;


