import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { Header } from '../../components/Header';
import { MainPage } from '../Main';
import ToDoList from '../ToDo';


export function Root() {
  return (
    <div>
      <Header/>

      <Container>
        <Switch>
          <Route path="/todo" component={ToDoList}/>
          <Route path="/" component={MainPage}/>
        </Switch>
      </Container>
    </div>
  );
}
