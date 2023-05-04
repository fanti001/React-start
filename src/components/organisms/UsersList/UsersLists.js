import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users';
import { Wrapper } from 'components/organisms/UsersList/UsersList.styled';

const UsersList = () => (
  <Wrapper>
    <ul>
      {/* { name, average, attendance } destrukturyzacja */}
      {users.map((usersData) => (
        <UsersListItem usersData={usersData} />
        // <UsersListItem usersData /> tylko gdy propsy sa true lub false
        // np.   isHighlighted
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
