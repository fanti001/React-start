import React from 'react';
import UsersListItem from 'components/UsersListItem/UsersListItem';
import { users } from 'data/users';

const UsersList = () => (
  <div>
    <ul>
      {/* { name, average, attendance } destrukturyzacja */}
      {users.map((usersData) => (
        <UsersListItem usersData={usersData} />
        // <UsersListItem usersData /> tylko gdy propsy sa true lub false
        // np.   isHighlighted
      ))}
      ;
    </ul>
  </div>
);

export default UsersList;
