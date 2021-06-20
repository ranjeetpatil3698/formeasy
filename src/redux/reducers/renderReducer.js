import { createSlice } from "@reduxjs/toolkit";

let countElements=(elements)=>{
    let count=0;
    elements.map((el)=>{
        if(el===true){
            count++;
        }
    });
    return count;
}


export const counterSlice = createSlice({
  name: "renderReducer",
  initialState: {
    formname:"Reactjs workshop",
    formelements:3,
    submitstatus:[],
    submitready:false,
    formdetails: [
        {
            id:1,
            label:"whats your name",
            formtype:"text",
            required:true,
            answer:"",
            done:false
        },
        {
            id:2,
            label:"whats your Number",
            formtype:"Number",
            required:true,
            answer:"",
            done:false
        },
        {
            id:3,
            label:"upload a file",
            formtype:"File",
            required:true,
            answer:"",
            done:false
        }
    ]
  },
  reducers: {
    updateanswer:(state,action)=>{
      const {id,value}=action.payload;
      state.formdetails.map((el)=>{
        if(el.id==id){
          el.answer=value
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
    checksubmit:(state,action)=>{

    }
  },
});

// Action creators are generated for each case reducer function
export const {  updateanswer,checksubmit} = counterSlice.actions;

export default counterSlice.reducer;
