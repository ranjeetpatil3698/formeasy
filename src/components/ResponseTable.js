import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";

const ResponseTable = (props) => {
  const [data, setdata] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (props.data) {
      setdata(props.data);
    }
  }, [data]);

  if (data===null) {
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
                    {el2.answer}
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
