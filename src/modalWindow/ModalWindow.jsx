import React from "react";
import { Button } from "../UI/Button";
import styles from "./ModalWindow.module.css";
import ReactDOM from "react-dom";

const Bakcdrop = ({ validTrue, isValid }) => {
  return (
    !isValid && (
      <div className={styles["modal"]}>
        <div className={styles["modal-window"]}>
          <h1 className={styles.header}>Не корректный ввод</h1>

          <div className={styles["error-text"]}>
            <h3>Эти поля не могут быть пустыми</h3>
            <Button onClick={validTrue}>Закрыть</Button>
          </div>
        </div>
      </div>
    )
  );
};

const ModalWindow = ({ isValid, validTrue }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Bakcdrop isValid={isValid} validTrue={validTrue} />,
        document.getElementById("backdrop")
      )}
    </React.Fragment>
  );
};

export default ModalWindow;
