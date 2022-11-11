import React from 'react'
import styles from './NewUser.module.css'
import UserForm from './UserForm';

const NewUser = ({addNewUser, validFalse}) => {



  return (
      <div className={styles['new-user']}>
         <UserForm addNewUser={addNewUser} validFalse={validFalse}/>
      </div>
  )
}

export default NewUser;
