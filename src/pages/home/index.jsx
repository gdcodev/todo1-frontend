import React from 'react';
import Container from '../../components/container';
import withAuth from '../../hoc';

const Home = () => (
  <Container>
    <h1 style={{ textAlign: 'center', fontSize: 50 }}>Bienvenido a HULK STORE</h1>
  </Container>
);
export default withAuth(Home);
