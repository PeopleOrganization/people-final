import React from 'react';

const TableColum = ({ children }) => {
  return (
    <td className="common-table-column">
      {
        children
      }
    </td>
  )
}

export default TableColum;