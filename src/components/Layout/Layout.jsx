import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redax/auth/authSelectors';
import { Grid, GridItem } from '@chakra-ui/react';
import { navGridItem } from 'theme';
import Footer from 'components/Footer/Footer';

function Layout() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Grid
      templateAreas={{
        base: `'header' 'main' 'footer'`,
        md: `'header main'
      'header footer'`,
      }}
      gridTemplateRows={{ base: 'auto 1fr auto', md: '1fr auto' }}
      gridTemplateColumns={{ base: '1fr', md: 'auto 1fr' }}
      minHeight="100vh"
    >
      <GridItem as="header" sx={navGridItem} area={'header'}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </GridItem>
      <GridItem as="main" area={'main'}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </GridItem>
      <GridItem as="footer" area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default Layout;
