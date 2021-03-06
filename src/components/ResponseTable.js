import React from "react";
import _ from "lodash"

const ResponseTable = ({ data }) => {
  
  


  if (data.length <= 0) {
    return <div className="text-3xl p-2 text-purple-800">No responses recieved</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl p-2 text-purple-800">Response List</div>
      <table className=" bg-white   border-2 border-purple-800 rounded">
        <thead>
          <tr>
            {data &&
              data[0].map((el) => (
                <th
                  key={el._id}
                  className="bg-purple-400  border-2 border-purple-800 text-left px-8 py-4 text-white"
                >
                  {_.startCase( _.lowerCase(el.label ))}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((el, i) => (
              <tr key={i}>
                {el.map((el2) => (
                  <td key={el2._id} className=" px-8 py-4 border-2 border-purple-800">
                    {el2.formtype != "File" ? (
                    _.startCase( _.lowerCase( el2.answer )) 
                    ) : (
                      <a
                        href={`${process.env.REACT_APP_API}/viewfile/${el2.answer}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {el2.answer}
                      </a>
                    )}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponseTable;
