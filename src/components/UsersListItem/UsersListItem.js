import React from 'react';
import PropTypes from 'prop-types';

//dowolna nazwa nie tylko props np. kiełbasa
//lub destruktu.   userData,   lub od razu average, name, attendance
const UsersListItem = ({ usersData: { name, average, attendance = '0%' } }) => (
  <>
    <li key={name}>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </li>
  </>
);

UsersListItem.propTypes = {
  usersData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
