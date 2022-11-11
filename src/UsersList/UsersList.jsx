import React from 'react'
import User from '../User/User'
import styles from './UsersList.module.css'

const UsersList = ({users}) => {

   const userList = users.map(user => <User key={user.id} user={user}/>) 

  return (
    <ul className={styles['user-list']} >
      {userList}
    </ul>
  )
}

export default UsersList