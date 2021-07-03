import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom";

import axios from "axios";
import { useQuery,useQueryClient } from "react-query";
import ResponseTable from './ResponseTable';
import _ from "lodash";
import { Navbar } from './Navbar';
import { Formurl } from './Formurl';

const Response=() =>{
    const {url}=useParams();
    const [listResponses,setListResponses]=useState(null);
    const queryClient = useQueryClient();
    
    const constructdata=(initial)=>{
      const groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          )
          return result;
        }, []); 

      };

    const groupByID =Object.entries(groupBy(initial, 'responseid'))
    
    let final=[]
    for(let el=0;el<groupByID.length;el++){
      for(let el2=0;el2<groupByID[el].length;el2++){
        if(el2==1){
          final.push(groupByID[el][el2])
        }
      }
          
    }
    return final;
    }

    
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
          // console.log(responses)
          const finaldata=constructdata(responses);
          if(finaldata){
            // console.log(finaldata)
            setListResponses(finaldata)
            console.log(listResponses)
          }
          
        }
        
      },[isLoading])

    return (
        <div>
            <Navbar/>
            <div className="text-4xl font-sans">{currentdata?currentdata.data.allResponses[0].formname:""}</div>
            <Formurl url={url}/>
            <div>{listResponses!=null ? <ResponseTable data={listResponses}/>:"No responses received till now"}</div>
        </div>
    )
}

export default Response;
