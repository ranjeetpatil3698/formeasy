import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { Navbar } from "./Navbar";
import Formtable from "./Formtable";
import CreateForm from "./pages/CreateForm";
import { Link, useParams } from "react-router-dom";

export default function Admin() {
  const [form, setform] = useState([]);
  const queryClient = useQueryClient();
  const instance = axios.create({
    crossDomain: true,
    baseURL: process.env.REACT_APP_API,
    withCredentials: true,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  queryClient.removeQueries("currentform");

  const { data } = useQuery("allforms", () =>
    instance.get(`${process.env.REACT_APP_API}/getallforms`)
  );


  return (
    <div>
      <Navbar />
      <Link
        to="/createform"
        className="cursor-pointer bg-purple-600 bg-opacity-75 text-white w-1/4 p-3 m-3 rounded-md"
      >
        <span className="text-2xl">+</span> Create New Form
      </Link>
      {data && data.data.allForms.length == 0 ? (
        <div>Create a form to collect responses</div>
      ) : (
        <div>&nbsp;</div>
      )}
      {data ? <Formtable data={data} /> : <div>&nbsp;</div>}
    </div>
  );
}
