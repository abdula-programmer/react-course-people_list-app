import { useState } from 'react';
import ModalWindow from '../modalWindow/ModalWindow';
import NewUser from '../NewUser';
import UsersList from '../UsersList/UsersList';
import styles from'./App.module.css';

function App() {

  const [id, setId] = useState(100);

  const [users, setUsers] = useState([]);
  const [isValid, setValid] = useState(true);
  
 const validFalse = () => {

  setValid(false);
 }

 const validTrue = () => {
  setValid(true);
 }

  const addNewUser = (name, age) => {

    const user = {
      id: id,
      name, 
      age
    }

    setId(prev => prev + 1);

    setUsers((prevState ) => {
      return[
        ...prevState,
        user
      ]
    })
  }

  return (
    <div className={styles.app}>
      <NewUser addNewUser={addNewUser}  validFalse={validFalse}   />
      <UsersList users={users} />
      <ModalWindow isValid={isValid} validTrue={validTrue}/>
    </div>
  );
}

export default App;
