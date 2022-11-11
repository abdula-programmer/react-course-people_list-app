import React from 'react'
import styles from './User.module.css'


const User = ({user: {name, age}}) => {

  return (
    <li className={styles.user}>
      {name} - {age} {age.toString()[age.toString().length - 1] < 5? 'года' : 'лет'}
    </li>
  )
}

export default User