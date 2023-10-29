import React from "react";

import UserListItem from "./UserListItem";

const UserList = (props) => {
  return (
    <ul>
      {props.userDetails.map((user) => (
        <UserListItem
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
        />
      ))}
    </ul>
  );
};

export default UserList;
