import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/header/index';
import Content from './components/header/content';
import Services from './components/sections/services';
const BackGround = styled.div`
  background-image: url("images/background.png");
  min-height: 100vh;
`

class App extends Component {
  render(){
    return (
      <div>
        <BackGround>
          <Header/>
          <Content/>
          <Services/>
        </BackGround>
      </div>
    );
  }
}

export default App;
