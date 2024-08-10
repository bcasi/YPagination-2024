import React from "react";
import "./Table.css";

const Table = ({ members }) => {
  return (
    <table className="table-container">
      <thead className="table-thead">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {members.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
