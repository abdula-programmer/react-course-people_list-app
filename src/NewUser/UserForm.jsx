import React, { useRef, useState } from "react";
import styles from "./UserForm.module.css";
import { Button } from "../UI/Button";

const UserForm = ({ addNewUser, validFalse }) => {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const submitForm = (e) => {
    let inputName = inputNameRef.current.value,
      inputAge = inputAgeRef.current.value;
    e.preventDefault();
    inputName.length > 3 && inputAge > 0
      ? addNewUser(inputName, inputAge)
      : validFalse();

      inputNameRef.current.value = '';
      inputAgeRef.current.value = '';
  };
  return (
    <form onSubmit={submitForm} className={styles["user-form"]}>
      <div>
        <label>Имя</label>
        <input type="text" ref={inputNameRef} />
      </div>
      <div>
        <label>Возраст</label>
        <input type="number" min={0} ref={inputAgeRef} />
      </div>
      <Button type="submit">Добавить пользователя</Button>
    </form>
  );
};

export default UserForm;
