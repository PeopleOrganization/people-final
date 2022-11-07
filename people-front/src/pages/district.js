import React from "react";

function District(props) {
  return (
    <div>
      <select>
        {arr[props.prov].map((item) => (
          <option key={item.id} value={item.district}>
            {item.district}
          </option>
        ))}
      </select>
    </div>
  );
}

const seoul = [
  { id: 0, district: "선택하기" },
  { id: 1, district: "종로구" },
  { id: 2, district: "중구" },
  { id: 3, district: "용산구" },
  { id: 4, district: "성동구" },
];

const busan = [
  { id: 0, district: "선택하기" },
  { id: 1, district: "중구" },
  { id: 2, district: "서구" },
  { id: 3, district: "동구" },
  { id: 4, district: "영도구" },
];

const daegu = [
  { id: 0, district: "선택하기" },
  { id: 1, district: "중구" },
  { id: 2, district: "동구" },
  { id: 3, district: "서구" },
  { id: 4, district: "남구" },
];

const incheon = [
  { id: 0, district: "선택하기" },
  { id: 1, district: "중구" },
  { id: 2, district: "동구" },
  { id: 3, district: "미추홀구" },
  { id: 4, district: "연수구" },
];

const arr = [seoul, busan, daegu, incheon];

export default District;
