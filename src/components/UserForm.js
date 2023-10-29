import React, { useState } from "react";

const UserForm = (props) => {
  const [enteredStringValue, setEnteredStringValue] = useState("");
  const [enteredNumberValue, setEnteredNumberVAlue] = useState("");

  const stringValue = (event) => {
    setEnteredStringValue(event.target.value);
  };

  const numberValue = (event) => {
    setEnteredNumberVAlue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      enteredStringValue.trim().length === 0 &&
      enteredNumberValue.trim().length === 0
    ) {
      return alert(`Please enter a valid name and age (non-empty-values)`);
    }

    if (enteredNumberValue <= 0) {
      alert(`Please enter a valid age(>0).`);
      setEnteredStringValue("");
      setEnteredNumberVAlue("");
      return;
    }

    const userObj = {
      name: enteredStringValue,
      age: enteredNumberValue,
      id: Math.random().toString(),
    };
    props.getData(userObj);

    setEnteredStringValue("");
    setEnteredNumberVAlue("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>UserName</label>
        <input type="text" value={enteredStringValue} onChange={stringValue} />
        <br />
        <br />
        <label>Age (Years)</label>
        <input
          type="number"
          value={enteredNumberValue}
          onChange={numberValue}
        />
        <br />
        <br />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
