import React from "react";

function Province2(props) {

  const provinces = [
    { id: 1, province: "서울특별시" },
    { id: 2, province: "경기도" },
    { id: 3, province: "강원도" },
    { id: 4, province: "충청북도" },
    { id: 5, province: "충청남도" },
    { id: 6, province: "전라북도" },
    { id: 7, province: "전라남도" },
    { id: 8, province: "경상북도" },
    { id: 9, province: "경상남도" },
    { id: 10, province: "제주특별자치도" },
  ];

  return (
    <div>
      <select>
        {provinces.map((item) => (
          <option key={item.id} value={item.id}>
            {item.province}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Province2;
