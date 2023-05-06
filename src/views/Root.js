import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { Wrapper } from './Root.styled';
import UsersList from 'components/organisms/UsersList/UsersLists';
import Form from 'components/organisms/Form/Form';
import { users as usersData } from 'data/users';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState([]);
  // const [isLoading, setLoadingState] = useState([]);
  const [formValues, setFormValues] = useState(initialFormState);

  useEffect(() => {
    // setLoadingState(true);
    mockAPI()
      .then((data) => {
        // setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err)); //działa jak componentDidMount
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home | </Link>
            <Link to="/add-user">Add User</Link>
          </nav>
          <Routes>
            <Route path="/" element={<UsersList deleteUser={deleteUser} users={users} />}></Route>
            <Route
              path="/add-user"
              element={<Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />}
            ></Route>
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
