import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerAsync } from 'redax/auth/authOperations';
import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { formLabel, hoverIcon, inputLeftEl } from 'theme';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';

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

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(registerAsync({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
        <FormLabel sx={formLabel}>Name</FormLabel>
        <InputGroup sx={hoverIcon}>
          <InputLeftElement sx={inputLeftEl}>
            <Icon as={BsFillPersonFill} color="customColor.200" />
          </InputLeftElement>
          <Input
            variant="filled"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </InputGroup>
      </FormControl>
      
      <FormControl>
        <FormLabel sx={formLabel}>Email</FormLabel>
        <InputGroup sx={hoverIcon}>
          <InputLeftElement sx={inputLeftEl}>
            <Icon as={MdEmail} color="customColor.200" />
          </InputLeftElement>
          <Input
            variant="filled"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel sx={formLabel}>Password </FormLabel>
        <InputGroup sx={hoverIcon}>
          <InputLeftElement sx={inputLeftEl}>
            <Icon as={RiLockPasswordFill} color="customColor.200" />
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
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
