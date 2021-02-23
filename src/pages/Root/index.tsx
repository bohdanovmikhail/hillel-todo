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
          <Route path="/" exact component={MainPage}/>
          <Route path="/todo" component={ToDoList}/>
        </Switch>
      </Container>
    </div>
  );
}
