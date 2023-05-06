import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from 'components/organisms/UsersList/UsersList.styled';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <h1>Students list</h1>

        <ul>
          {users.map((usersData) => (
            <UsersListItem deleteUser={deleteUser} key={usersData.name} usersData={usersData} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default UsersList;
