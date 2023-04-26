import React from 'react';
import Container from '../../components/container';
import withAuth from '../../hoc';

const Home = () => (
  <Container>
    HOLA
  </Container>
);
export default withAuth(Home);
