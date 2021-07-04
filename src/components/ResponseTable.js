import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import _ from "lodash"

const ResponseTable = ({ data }) => {
  // const [data, setdata] = useState(null);
  const queryClient = useQueryClient();

  // useEffect(() => {
  //   if (props.data) {
  //     setdata(props.data);
  //   }
  //   console.log("running effects in formtable")
  // }, [props.data]);
  console.log(data);

  if (data.length <= 0) {
    return <div>No responses recieved</div>;
  }

  return (
    <div>
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
