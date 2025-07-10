import React, { useState } from "react";

const MultipleForm_Input_Handling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("form submitted");
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      age: "",
      password: "",
      phone: "",
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          Name:{" "}
          <input
            value={formData.name}
            name="name"
            onChange={onChangeHandler}
            type="text"
          />
        </div>
        <div>
          Email:{" "}
          <input
            value={formData.email}
            name="email"
            onChange={onChangeHandler}
            type="email"
          />
        </div>
        <div>
          Age:{" "}
          <input
            value={formData.age}
            name="age"
            onChange={onChangeHandler}
            type="number"
          />
        </div>
        <div>
          Password:{" "}
          <input
            value={formData.password}
            name="password"
            onChange={onChangeHandler}
            type="password"
          />
        </div>
        <div>
          phone:{" "}
          <input
            value={formData.phone}
            name="phone"
            onChange={onChangeHandler}
            type="number"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default MultipleForm_Input_Handling;
