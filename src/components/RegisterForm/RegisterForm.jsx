import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerAsync } from 'redax/auth/authOperations';
import { Button, FormControl, Input } from '@chakra-ui/react';


function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(registerAsync({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <FormControl onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <Input variant='filled' type="text" name="name" value={name} onChange={handleChange} />
      </label>

      <label>
        Email
        <Input variant='filled'
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label>
        Password
        <Input
          variant='filled'
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <Button variant='myBtn' type="submit">Register</Button>
    </FormControl>
  );
}

export default RegisterForm;
