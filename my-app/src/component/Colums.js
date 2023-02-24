import React from "react";

function Colums() {
  // eslint-disable-next-line
  const items = [];
  return (
    <React.Fragment>
      {/* {items.map((item=) => {
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>;
      })} */}
      <td>Name</td>
      <td>Vishwas</td>
    </React.Fragment>
  );
}

export default Colums;
