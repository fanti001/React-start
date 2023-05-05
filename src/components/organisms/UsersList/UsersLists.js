import React, { useState, useEffect } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users as usersData } from 'data/users';
import { Wrapper } from 'components/organisms/UsersList/UsersList.styled';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err)); //działa jak componentDidMount

    return () => {
      //działa jak WillUnmount
      // window.removeEventListener('nazwa eventu', funkcja odpowiadająca za ten event)
    };
  }, []);

  useEffect(() => {
    //działa jak DidUpdate
    console.log('Loading state has changed');
  }, [isLoading]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : `Users List`}</h1>
      <ul>
        {users.map((usersData) => (
          <UsersListItem deleteUser={deleteUser} key={usersData.name} usersData={usersData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
