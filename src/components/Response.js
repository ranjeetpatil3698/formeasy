import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import Logout from './Logout';
import axios from "axios";
import { useQuery } from "react-query";


const Response=() =>{
    const {url}=useParams();
    const [listResponses,setListResponses]=useState(null);
    const constructdata=(initial)=>{
      const groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          );
          return result;
        }, {}); 

      };

    const groupByID = groupBy(initial, 'responseid');
    return groupByID;
    }

    console.log(url)
    const instance = axios.create({
        baseURL: process.env.REACT_APP_API,
        withCredentials: true,
      });
    
      const {
        isLoading,
        isError,
        data: currentdata,
        error,
      } = useQuery("responses", () =>
        instance.get(`${process.env.REACT_APP_API}/getAllResponses/${url}`)
      );

      useEffect(()=>{
        if(currentdata){
          const {responses}=currentdata.data.allResponses[0];
          console.log(responses)
          const finaldata=constructdata(responses);
          if(finaldata){
            console.log(finaldata)
            setListResponses(finaldata)
          }
          
        }
        
      },[isLoading])

    return (
        <div>
            <Logout/>
            Responses <div>{url}</div>
            <div>{listResponses && listResponses[0].label}</div>
        </div>
    )
}

export default Response;
