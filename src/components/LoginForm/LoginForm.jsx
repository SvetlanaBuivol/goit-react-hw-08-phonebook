import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
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
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
      <FormLabel> Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        </FormControl>

      <FormControl>
      <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        </FormControl>

      <Button variant='myBtn' type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;
