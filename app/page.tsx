import { Typography } from '@mui/material';
import { Box } from 'lucide-react';
import React from 'react';
//import Nav from "../components/Nav/Nav";
const Nav = React.lazy(() => import('./components/Nav/Nav'));
export default function Home() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Box >
          <h1></h1>
          <Typography mt={25} ml={'auto'} mr={'auto'} variant='h1' fontSize={16} fontWeight={700}>Let's Search properties for sale in Pakistan</Typography>
          <Typography variant='body2'>Reach millions of buyers, sellers and renters on the largest real estate network on the web.
          </Typography>
        </Box>


      </React.Suspense>
    </>
  )
}
