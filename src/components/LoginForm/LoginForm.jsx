import { Button, FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { loginAsync } from 'redax/auth/authOperations';

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(loginAsync({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
        <FormLabel> Email</FormLabel>
        <Input
          variant="filled"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
        <InputLeftElement pointerEvents='none'>
      <Icon as={RiLockPasswordFill} />
    </InputLeftElement>
        <Input
          variant="filled"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          />
          </InputGroup>
      </FormControl>

      <Button variant="myBtn" type="submit">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
