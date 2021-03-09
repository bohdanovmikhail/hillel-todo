import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

import { ITodoItem } from '../../../../core/types';
import { TodoItem } from '../TodoItem';


export class TodoList extends React.Component<IProps, IState> {
  public state: IState = {
    filter: null,
    editItemID: null,
    editItemText: null,
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
      return (
        <div key={item.id}>
          <input
            type="text"
            value={this.state.editItemText}
            onChange={event => this.setState({ editItemText: event.target.value })}
          />

          <button onClick={() => this.saveItem()}>Save</button>
          <button onClick={() => this.cancelEdit()}>Cancel</button>
        </div>
      );
    }

    return (
      <div key={item.id}>
        <TodoItem
          item={item}
        />

        <button onClick={() => this.editItem(item)}>Edit</button>
        <button onClick={() => this.props.removeItem(item)}>x</button> 
      </div>
    );
  }

  private clickFilterButton(filter): void {
    this.setState({ filter });
  }

  private editItem(item: ITodoItem) {
    this.setState({
      editItemID: item.id,
      editItemText: item.text,
    });
  }

  private saveItem() {
    const item = this.props.list.find(item => item.id === this.state.editItemID);

    if (!item) {
      this.cancelEdit();
      return;
    }

    this.props.updateItem({
      ...item,
      text: this.state.editItemText,
    });

    this.cancelEdit();
  }

  private cancelEdit() {
    this.setState({
      editItemID: null,
      editItemText: null,
    });
  }
}

interface IProps {
  list: ITodoItem[];
  updateItem: (item: ITodoItem) => void;
  removeItem: (item: ITodoItem) => void;
}

interface IState {
  filter: boolean;
  editItemID: string;
  editItemText: string;
}
