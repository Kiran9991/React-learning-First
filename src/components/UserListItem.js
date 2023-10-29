import React from "react";

const UserListItem = (props) => {
  return (
    <li key={props.id} id={props.id}>
      {props.name} {`(${props.age} years old)`}
    </li>
  );
};

export default UserListItem;
