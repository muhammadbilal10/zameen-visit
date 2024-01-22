import React from 'react';
//import Nav from "../components/Nav/Nav";
const Nav = React.lazy(() => import('@/components/NavBar'));
const Footer =React.lazy(()=> import ("@/components/Footer/Footer"));
export default function Dashboard() {
  return (
    <>
<React.Suspense fallback={<div>Loading...</div>}>
  <Nav />
  <h1>Dashboard</h1>
</React.Suspense>
<Footer/>
    </>
     
   
  )
}