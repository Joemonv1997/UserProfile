import styles from "./userAdd.module.css";

import React, { useState } from "react";
import ListUser from "../ListUser/listUser";
import Card from "../../Helpers/Card";
import ErrorModal from "../ErrorModal/ErrorModal";
function UserAdd(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState();
  const [userCountry, setUserCountry] = useState("");
  const [error, setError] = useState("");
  const AddUserHandle = (event) => {
    event.preventDefault();
    if (+userAge<-1 || +userAge===0){
      setError({
        'title':'Invalid User Age' ,
        'content':'User must have age greater than 0' 
      })
        return;
    }
    if (userName.trim().length===0 || userCountry.trim().length === 0){
      setError({
        'title':'Invalid User Name and Country' ,
        'content':'User Name and Country must not be empty' 
      })
        return;
    }
    const po = {
      username: userName,
      userage: userAge,
      usercountry: userCountry,
    };
    props.getuser(po);
    setUserName('')
    setUserAge(0)
    setUserCountry('')
  };
  const onError=()=>{
    setError(null)
  }
  return (
    <div>
        {error&&
        <ErrorModal title={error.title} content={error.content} onConfirm={onError} />}
    
    <Card className={styles.input}>
      <h1>Add User</h1>
      <form onSubmit={AddUserHandle}>
        <label htmlFor="username">Enter the User Name</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="userage">Enter the User Age</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="number"
          id="userage"
          value={userAge}
          onChange={(e) => {
            setUserAge(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="usercountry">Enter the User Country</label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          id="usercountry"
          value={userCountry}
          onChange={(e) => {
            setUserCountry(e.target.value);
          }}
        ></input>
        <br />
        <button type="submit" className={styles.button}>
          Add User
        </button>
      </form>
      
    </Card>
    </div>
  );
}

export default UserAdd;
