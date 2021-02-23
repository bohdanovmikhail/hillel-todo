import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

import { ITodoItem } from '../../../../core/types';
import { TodoItem } from '../TodoItem';


export class TodoList extends React.Component<IProps, IState> {
  public state: IState = {
    filter: null,
    editItemID: null,
  };

  public render() {
    return (
      <div>
        {this.getFilter()}
        {this.getList()}
      </div>
    );
  }

  private getFilter() {
    return (
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {this.renderFilterItem('All Items', null)}
        {this.renderFilterItem('Done Items', true)}
        {this.renderFilterItem('Undone Items', false)}
      </ButtonGroup>
    );
  }

  private renderFilterItem(text, filterValue) {
    const { filter } = this.state;
    const variant = filterValue === filter ? 'contained' : null;

    return (
      <Button variant={variant} onClick={() => this.clickFilterButton(filterValue)}>
        {text}
      </Button>
    );
  }

  private getList() {
    const { filter } = this.state;
    let items = this.props.list;

    if (filter === true) {
      items = items.filter(item => item.done);
    } else if (filter === false) {
      items = items.filter(item => !item.done);
    }

    return (
      <div>
        {items.map(item => this.renderTodoItem(item))}
      </div>
    );
  }

  private renderTodoItem(item: ITodoItem) {
    if (this.state.editItemID === item.id) {
      return null;
    }

    return (
      <TodoItem
        key={item.id}
        item={item}
      />
    );
  }

  private clickFilterButton(filter): void {
    this.setState({ filter });
  }
}

interface IProps {
  list: ITodoItem[];
}

interface IState {
  filter: boolean;
  editItemID: string;
}
