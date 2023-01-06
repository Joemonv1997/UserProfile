import styles from './App.module.css';
import UserAdd from './components/User/userAdd';
function App() {
  return (
    <div className={styles['App-header']}>
      <h1>User Profile</h1> 
      <UserAdd/>
    </div>
  );
}

export default App;
