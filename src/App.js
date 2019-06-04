import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './component/Landing/Landing';
import Game from './component/Game/Game';
import { Container } from '@material-ui/core';

export default class App extends React.Component {
  render() {
    return(
      <Container maxWidth="sm">
        <BrowserRouter>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/game" component={Game}/>
          {/*<Route path="/score" component={Score}/>*/}
          {/*<Route path="/scores" component={Scores}/>*/}
        </BrowserRouter>
      </Container>
    )
  }
}