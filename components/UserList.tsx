import * as React from 'react';
import styled from 'styled-components';

const UserListItem = styled.p`
  padding: 12px;
  border: 1px solid navy;
`;


const UserList = ({ users }) => {
  if (users.length < 1) {
    return <p>No users added!</p>;
  }

  return (
    <div>
      {
        users.map((user) => <UserListItem>{`${user.username} - ${user.age} years old`}</UserListItem>)
      }
    </div>
  );
};

export default UserList;
