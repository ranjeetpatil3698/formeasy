import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "formlist",
  initialState: {
    formname:"",
    formelements:0,
    formdetails: []
  },
  reducers: {
    updatelabel:(state,action)=>{
      const {id,value}=action.payload;
      state.formdetails.map((el)=>{
        if(el.id==id){
          el.label=value
        }
      })
    },
    updateanswer:(state,action)=>{
      const {id,value}=action.payload;
      state.formdetails.map((el)=>{
        if(el.id==id){
          el.answer=value
        }
      })
    },
    updaterequired:(state,action)=>{
      const {id,value}=action.payload;
      state.formdetails.map((el)=>{
        if(el.id==id){
          el.required=value
        }
      })
    },
    updateformname:(state,action)=>{
      const {name}=action.payload;
      state.formname=name;
    },
    deletefield:(state,action)=>{
      const {id}=action.payload;
      
      state.formdetails=state.formdetails.filter((el)=>el.id!=id);
      state.formelements=state.formelements-1;
    },
    addfield:(state,action)=>{
      const {formtype}=action.payload;
      if(formtype==="text"){
        state.formdetails.push(
          {
          id:state.formelements+1,
          label:"",
          formtype:"text",
          required:false,
          answer:""
          }
        )
        state.formelements=state.formelements+1;
      }
      if(formtype==="Number"){
        state.formdetails.push(
          {
          id:state.formelements+1,
          label:"",
          formtype:"Number",
          required:false,
          answer:""
          }
        )
        state.formelements=state.formelements+1;
      }
      if(formtype==="File"){
        state.formdetails.push(
          {
          id:state.formelements+1,
          label:"",
          formtype:"File",
          required:false,
          answer:""
          }
        )
        state.formelements=state.formelements+1;
      }
      
      
      
    }
  },
});

// Action creators are generated for each case reducer function
export const {  updatelabel,updateanswer,updaterequired,updateformname,deletefield,addfield} = counterSlice.actions;

export default counterSlice.reducer;
