import React from "react";
import District from "./district";
import { useState } from "react";

function Province(props) {
  const [value, setValue] = useState(1);

  const provinces = [
    { id: 0, province: "서울특별시" },
    { id: 1, province: "부산광역시" },
    { id: 2, province: "대구광역시" },
    { id: 3, province: "인천광역시" },
  ];

  return (
    <div>
      <select
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {provinces.map((item) => (
          <option key={item.id} value={item.id}>
            {item.province}
          </option>
        ))}
      </select>
      <District prov={value}></District>
    </div>
  );
}

export default Province;
