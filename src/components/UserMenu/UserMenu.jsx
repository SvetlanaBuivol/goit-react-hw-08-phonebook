import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAsync } from 'redax/auth/authOperations';
import { getUserName } from 'redax/auth/authSelectors';

function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutAsync());
  };

  return (
    <Flex gap="16px" alignItems="center" flexDirection={{ md: 'column' }}>
      <Text fontSize="1em">Hello, {name}</Text>
      <Button variant="myBtn" mt={{ base: '0' }} onClick={handleClick}>
        Logout
      </Button>
    </Flex>
  );
}

export default UserMenu;
