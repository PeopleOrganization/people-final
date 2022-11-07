import React from 'react';

const TableRow = ({ children }) => {
  return (
    <td className="common-table-column">
      {
        children
      }
    </td>
  )
}

export default TableRow;