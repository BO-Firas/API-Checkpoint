import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import './App.css';

const App = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUserList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      <UserList userList={userList} />
    </div>
  );
};

export default App;
