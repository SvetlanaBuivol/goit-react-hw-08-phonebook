import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redax/auth/authSelectors';
import { Grid, GridItem } from '@chakra-ui/react';
import { navGridItem } from 'theme';

function Layout() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Grid templateColumns="repeat(7, 1fr)">
      <GridItem
        as="header"
        sx={navGridItem}
        colSpan={{ base: 7, md: 1, lg: 1 }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </GridItem>
      <GridItem as="main" colSpan={{ base: 7, md: 6, lg: 6 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
      </GridItem>
    </Grid>
  );
}

export default Layout;
