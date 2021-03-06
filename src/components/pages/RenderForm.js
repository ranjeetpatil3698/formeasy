import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextClient from "../clientForm/TextClient";
import NumberClient from "../clientForm/NumberClient";
import UploadClient from "../clientForm/UploadClient";
import SubmitButton from "../clientForm/SubmitButton";
import ClientHeading from "../clientForm/ClientHeading";
import { useParams,Redirect } from "react-router-dom";
import { setInitialState } from "../../redux/reducers/renderReducer";
import axios from "axios";
import { useQuery } from "react-query";

function RenderForm() {
  const { formdetails, submitready, formname } = useSelector(
    (state) => state.formrender
  );

  let { url } = useParams();
  
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API,
    withCredentials: true,
  });

  const {
    isLoading,
    data: currentdata,
  } = useQuery("currentform", () =>
    instance.get(`${process.env.REACT_APP_API}/getform/${url}`)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    
    if (!isLoading && currentdata.data) {
      
      dispatch(setInitialState(currentdata.data));
    }
  }, [isLoading,currentdata]);

  if(!isLoading && !currentdata ){
    return <Redirect to="/404"/>
  }

  if(currentdata && currentdata.data.message){
    return(
      <div className="text-3xl text-white bg-red-600 h-full p-4">
        {currentdata.data.message}.
        </div>
      )
  }

  return (
    <div className="flex flex-col gap-2 m-4">
        <div>{isLoading?"Loading form":""}</div>
      <ClientHeading heading={formname} />
      {formdetails.map(({ id, formtype, required, answer, label, done }) => {
        if (formtype == "text") {
          return (
            <TextClient
              id={id}
              key={id}
              label={label}
              important={required}
              solution={answer}
              done={done}
            />
          );
        }
        if (formtype == "Number") {
          return (
            <NumberClient
              id={id}
              key={id}
              label={label}
              important={required}
              solution={answer}
              done={done}
            />
          );
        }
        if (formtype == "File") {
          return (
            <UploadClient
              id={id}
              key={id}
              label={label}
              important={required}
              solution={answer}
              done={done}
            />
          );
        }
      })}
      <span className="font-semibold text-red-600">
        {submitready ? null : "Please fill all the fields"}
      </span>
      <SubmitButton url={url} />
    </div>
  );
}

export default RenderForm;
