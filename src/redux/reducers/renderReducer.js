import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid_v4 } from "uuid";

let countElements=(elements)=>{
    let count=0;
    elements.map((el)=>{
        if(el===true){
            count++;
        }
    });
    return count;
}

const initialState={
  formname:"",
  formelements:0,
  submitstatus:[],
  submitready:false,
  formdetails: [],
  formurl:"",
  formsubmit:false,
  responseID:uuid_v4()
}

export const counterSlice = createSlice({
  name: "renderReducer",
  initialState: initialState,
  reducers: {
    updateanswer:(state,action)=>{
      const {id,value}=action.payload;
      state.formdetails.map((el)=>{
        if(el.id==id){
          el.answer=value
          el.responseid=state.responseID
          if(el.answer.length>0){
              el.done=true
              state.submitstatus[el.id-1]=true;
          }
          if(el.answer.length==0){
            el.done=false
            state.submitstatus[el.id-1]=false;
        }
        }
      });
      let count=countElements(state.submitstatus);
      if(count>=state.formelements){
          state.submitready=true;
      }else{
        state.submitready=false;
      }
    },
    setInitialState:(state,{payload})=>{
      if(payload.data!=null){
        const {fname,data,formelements,formurl}=payload.data
        state.formname=fname;
        state.formdetails=data;
        state.formelements=formelements;
        state.formurl=formurl
      }
      
    },
    setformsubmit:(state,payload)=>{
      state.formsubmit=true;
    }
  },
});

// Action creators are generated for each case reducer function
export const {  updateanswer,setInitialState,setformsubmit} = counterSlice.actions;

export default counterSlice.reducer;


