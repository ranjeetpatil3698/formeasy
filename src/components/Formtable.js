import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Formtable({ data }) {
  // console.log(data)
  return (
    <div>
      <div className="flex flex-col m-4 border border-purple-900">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div >
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.data.allForms.map((form) => (
                    <tr key={form.formurl} className="">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {form.fname}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Link to={`/viewform/${form.formurl}`}>View Form</Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          className="text-indigo-600 hover:text-indigo-900"
                          to={`/responses/${form.formurl}`}
                        >
                          View Responses
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
