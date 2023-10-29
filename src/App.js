import React, { useState } from "react";

import UserForm from "./components/UserForm";
import UserList from "./components/UserLists";

function App() {
  const userObj = [];

  const [newUserObj, setNewUserObj] = useState(userObj);

  function data(enteredDetails) {
    setNewUserObj((prevData) => {
      const updatedData = [...prevData];
      updatedData.push(enteredDetails);
      return updatedData;
    });
  }

  let content = <UserList userDetails={newUserObj} />;

  return (
    <div>
      <section>
        <UserForm getData={data} />
      </section>
      <section>{content}</section>
    </div>
  );
}

export default App;
