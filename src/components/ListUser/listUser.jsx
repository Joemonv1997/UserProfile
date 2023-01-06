import React from 'react'
import styles from './listUser.module.css'
function ListUser(props) {
  return (
    <div className={styles.user}>listUser
    {
      props.userlist.map((eachuser)=>{
        return(
          <div key={eachuser.id} className={styles.listuser}><h1>{eachuser.username}</h1></div>
        )
      })
    }
    </div>
  )
}

export default ListUser