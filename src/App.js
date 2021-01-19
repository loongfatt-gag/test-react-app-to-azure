import React from 'react';
import { Container } from '@material-ui/core';
import MainSwitch from './components/MainSwitch';

// import Navbar from './components/NavBar';
// import ButtonAppBar from './layout/ButtonAppBar';
import ButtonAppBarTempDrawer from './layout/ButtonAppBarTempDrawer';
// import TempDrawer from './layout/TempDrawer';



function App() {
  return (
    <React.Fragment>
      <ButtonAppBarTempDrawer />
      <Container>
        <div className="page-content" />
        <MainSwitch />
      </Container>
    </React.Fragment>
  );
}

export default App;
