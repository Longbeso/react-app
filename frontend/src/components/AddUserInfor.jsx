import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      name: name,
      age: Number(age),
    });
  };

  const changeName = (e) => {
    setName(e?.target?.value);
  };

  const changeAge = (e) => {
    setAge(e?.target?.value);
  };

  return (
    <div>
      My name is {name} and i'm {age} years old{" "}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name: </label>
        <input
          id="name"
          name="name"
          value={name}
          type="text"
          onChange={changeName}
        />
        <label htmlFor="age">Your age: </label>
        <input
          id="age"
          name="age"
          value={age}
          type="text"
          onChange={changeAge}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
