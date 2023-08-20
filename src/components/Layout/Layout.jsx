import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Header } from './Layput.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redax/auth/authSelectors';
import { Grid, GridItem } from '@chakra-ui/react';

function Layout() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Grid templateColumns="repeat(7, 1fr)">
      <GridItem
        as="header"
        display='flex'
        flexDirection={{base: 'row', md: 'column'}}
        alignItems='center'
        justifyContent='space-around'
        colSpan={{ base: 7, md: 1, lg: 1 }}
        bg="customColor.50"
        minHeight={{md: '100vh', lg: '100vh'}}
        p={{ base: '15px', lg: '36px' }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </GridItem>
      <GridItem as="main" py='60px' px='20px' colSpan={{ base: 7, md: 6, lg: 6 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          </Suspense>
      </GridItem>
    </Grid>
  );
}

export default Layout;
