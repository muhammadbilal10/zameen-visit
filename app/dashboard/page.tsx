import React from 'react';
//import Nav from "../components/Nav/Nav";
const Nav = React.lazy(() => import('../components/Nav/Nav'));
export default function Dashboard() {
  return (
    <>
<React.Suspense fallback={<div>Loading...</div>}>
  <Nav />
  <h1>Dashboard</h1>
</React.Suspense>
    </>
     
   
  )
}