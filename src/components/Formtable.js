import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash"
import DeleteButton from "./buttons/DeleteButton";
import CheckBox from "./CheckBox";
export default function Formtable({ data }) {
  // console.log(data)
  return (
    <div>
      <table className="  border-2 border-purple-700 rounded space-y-0 m-4">
        <tbody className="bg-white  ">
          {data.data.allForms.map((form) => (
            <tr key={form.formurl} className="">
              <td className="px-6 py-4 border-2 border-purple-700">
                <div className="text-sm text-gray-900">{_.startCase( _.lowerCase( form.fname))}</div>
              </td>

              <td className="px-6 py-4  text-sm font-medium text-indigo-600 hover:text-indigo-900 border-2 border-purple-700">
                <Link to={`/viewform/${form.formurl}`}>View Form</Link>
              </td>
              <td className="px-6 py-4  text-right text-sm font-medium border-2 border-purple-700">
                <Link
                  className="text-indigo-600 hover:text-indigo-900  "
                  to={`/responses/${form.formurl}`}
                >
                  View Responses
                </Link>
              </td>
              <td className="px-6 py-4  text-right text-sm font-medium border-2 border-purple-700">
                <DeleteButton id={form._id}/>
              </td>
              <td className="px-6 py-4  text-right text-sm font-medium border-2 border-purple-700">
                <CheckBox check={form.visible} url={form.formurl}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
