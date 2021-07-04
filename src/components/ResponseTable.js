import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";

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
      <table className=" bg-white rounded border ">
        <thead>
          <tr>
            {data &&
              data[0].map((el) => (
                <th
                  key={el._id}
                  className="bg-purple-500 border text-left px-8 py-4 text-white"
                >
                  {el.label}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((el, i) => (
              <tr key={i}>
                {el.map((el2) => (
                  <td key={el2._id} className="border px-8 py-4">
                    {el2.formtype != "File" ? (
                      el2.answer
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
