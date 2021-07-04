import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import ResponseTable from "./ResponseTable";
import _ from "lodash";
import { Navbar } from "./Navbar";
import { Formurl } from "./Formurl";

const Response = () => {
  const { url } = useParams();
  const [listResponses, setListResponses] = useState(null);
  const queryClient = useQueryClient();

  const constructdata = (initial) => {
    const groupBy = (array, key) => {
      return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, []);
    };

    const groupByID = Object.entries(groupBy(initial, "responseid"));

    let final = [];
    for (let el = 0; el < groupByID.length; el++) {
      for (let el2 = 0; el2 < groupByID[el].length; el2++) {
        if (el2 == 1) {
          final.push(groupByID[el][el2]);
        }
      }
    }
    return final;
  };

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

  useEffect(() => {
    if (currentdata) {
      const { responses } = currentdata.data.allResponses[0];
      const finaldata = constructdata(responses);

      if (finaldata) {
        setListResponses(finaldata);
      }
    }
  }, [isLoading]);

  return (
    <div>
      <Navbar />
      <div className="text-4xl font-sans m-4">
        {currentdata ? _.startCase( _.lowerCase(currentdata.data.allResponses[0].formname )): ""}
      </div>
      <Formurl url={url}  className="m-4"/>
      <div className="flex flex-col gap-2 border-2 rounded border-purple-700 p-2 w-1/6 m-2">
        <span className="text-2xl">Total Responses</span>
        <span className="text-2xl">{listResponses ? listResponses.length : ""}</span>
        
      </div>
      <div className="m-2">
        {listResponses === null ? (
          "No responses received till now"
        ) : (
          <ResponseTable data={listResponses} />
        )}
      </div>
    </div>
  );
};

export default Response;
