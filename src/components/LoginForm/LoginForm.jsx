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
import { useState } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { loginAsync } from 'redax/auth/authOperations';
import { MdEmail } from 'react-icons/md';
import { formHeader, formLabel, hoverIcon, inputLeftEl, textForm } from 'theme';
import { Link } from 'react-router-dom';
import MainContainer from 'components/MainContainer/MainContainer';

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
    <MainContainer>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Heading sx={formHeader}>Log in</Heading>
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
          <FormLabel sx={formLabel}>Password</FormLabel>
          <InputGroup sx={hoverIcon} alignContent="center">
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
          <Link to="/register">Register</Link> if you're new.
        </Text>
        <Button variant="myBtn" type="submit">
          Login
        </Button>
      </form>
    </MainContainer>
  );
}

export default LoginForm;
