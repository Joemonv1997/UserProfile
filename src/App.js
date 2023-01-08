import { useState } from 'react';
import styles from './App.module.css';
import ListUser from './components/ListUser/listUser';
import UserAdd from './components/User/userAdd';
function App() {
  const [user,setUser]=useState([])
  const getUser=(data)=>{
    return(
      setUser((prevstate) => {
        return [
          ...prevstate,
          {
            id: Math.random().toLocaleString(),
            ...data
          },
        ];
      })
      
    
    )
  }
  return (
    <div className={styles['App-header']}>
      <UserAdd getuser={getUser}/>
      <br />
      <ListUser userlist={user} />
    </div>
  );
}

export default App;
