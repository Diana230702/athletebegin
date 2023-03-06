import React from "react";

const Section = (props) => {
  console.log(props.users);
  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <th>name</th>
            <th>LastName</th>
            <th>age</th>
            <th>id</th>
          </tr>
          {props.users.map((item) => (
            <tr key={item.id}>
              <th>{item.name}</th>
              <th>{item.lastName}</th>
              <th>{item.age}</th>
              <th>{item.id}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
