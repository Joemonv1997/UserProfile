import styles from './userAdd.module.css'

import React, { useState } from 'react'
import ListUser from '../ListUser/listUser'

function UserAdd() {
    const [allUser,setAllUser]=useState([])
    const [userName,setUserName]=useState('')
    const [userAge,setUserAge]=useState(0)
    const [userCountry,setUserCountry]=useState('')
    const AddUserHandle=(event)=>{
        event.preventDefault()
        setAllUser((prevstate)=>{
            return(
                [...prevstate,{'id':Math.random().toLocaleString(),
                'username':userName,
                'userage':userAge,
                'usercountry':userCountry
            }]
            )
        })
        
    }
  return (
    <div className={styles.useradd}>
        <h1>Add User</h1>
        <form onSubmit={AddUserHandle}>
        <label htmlFor="username">Enter the User Name</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='text' id='username' onChange={(e)=>{setUserName(e.target.value)}}></input><br/>
        <label htmlFor="userage">Enter the User Age</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='number' id='userage' onChange={(e)=>{setUserAge(e.target.value)}}></input><br/>
        <label htmlFor="usercountry">Enter the User Country</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='text' id='usercountry' onChange={(e)=>{setUserCountry(e.target.value)}}></input><br/>
        <button type='submit' className={styles.button}>Add User</button>
        </form>
        <br/><br/><br/>
        <ListUser userlist={allUser}/>
    </div>
  )
}

export default UserAdd