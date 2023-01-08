import React from 'react'
import Card from '../../Helpers/Card'
import styles from './listUser.module.css'
function ListUser(props) {
  return (
    <Card classNames={styles.users}>listUser
    {
      props.userlist.map((eachuser)=>{
        return(
          <div key={eachuser.id} className={styles.listuser}><h1>{eachuser.username} ({eachuser.userage} Years Old)</h1></div>
        )
      })
    }
    </Card>
  )
}

export default ListUser