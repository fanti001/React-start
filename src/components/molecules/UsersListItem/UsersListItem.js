import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UsersListItem.styled';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';

//dowolna nazwa nie tylko props np. kiełbasa
//lub destruktu.   userData,   lub od razu average, name, attendance
const UsersListItem = ({ usersData: { name, average, attendance = '0%' } }) => (
  <>
    <Wrapper>
      <Average average={average} />
      <div>
        <p>{name}</p>
        <p>attendance: {attendance}</p>
      </div>
      <Button />
    </Wrapper>
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
