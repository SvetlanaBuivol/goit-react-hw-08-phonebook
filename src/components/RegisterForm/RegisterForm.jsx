import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerAsync } from 'redax/auth/authOperations';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';
import { formHeader, formLabel, hoverIcon, inputLeftEl, textForm } from 'theme';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import MainContainer from 'components/MainContainer/MainContainer';

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
    <MainContainer>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Heading sx={formHeader}>Register</Heading>
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
              required
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
              required
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
              required
            />
          </InputGroup>
        </FormControl>
        <Text sx={textForm}>
          <Link to="/login">Log in</Link> if you already have an account.
        </Text>

        <Button variant="myBtn" type="submit">
          Register
        </Button>
      </form>
    </MainContainer>
  );
}

export default RegisterForm;
