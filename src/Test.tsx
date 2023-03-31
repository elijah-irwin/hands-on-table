// @ts-nocheck

import React, { useState } from 'react';

function Table() {
  const [data, setData] = useState([]);

  const handlePaste = async event => {
    const text = await navigator.clipboard.readText();
    const rows = text.split(/\r\n|\n|\r/).map(row => row.split('\t'));
    setData(rows);
  };

  return (
    <div onPaste={handlePaste}>
      <table>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
