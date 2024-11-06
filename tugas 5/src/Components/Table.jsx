// src/Components/Table.jsx
import React from 'react';
import Button from './Button';

function Table({ data }) {
    if (!data || data.length === 0) {
      return <p>No data available</p>;
    }
  
    return (
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">No.</th>
            <th className="px-4 py-2">NIM</th>
            <th className="px-4 py-2">Nama</th>
            <th className="px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}.</td>
              <td className="border px-4 py-2">{item.nim}</td>
              <td className="border px-4 py-2">{item.nama}</td>
              <td className="border px-4 py-2">
                <Button style="bg-yellow-500 text-white px-4 py-2 rounded" text="Edit" />
                <Button style="bg-red-500 text-white px-4 py-2 rounded" text="Hapus" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;
  