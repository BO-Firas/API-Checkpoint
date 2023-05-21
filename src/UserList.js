import React from 'react';

const UserList = ({ userList }) => {
  return (
    <ul>
      {userList.map(user => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
