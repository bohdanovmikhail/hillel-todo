import * as React from 'react';
import { connect } from 'react-redux';
import {
  todoGetAll,
  todoCreate,
  todoUpdate,
  todoDelete,
  selectToDoList,
} from '../../core/store/todo';
import { selectToDoIsLoading } from '../../core/store/todo';
import { ITodoItem } from '../../core/types';
import { Preloader } from '../../components/Preloader';
import { TodoList } from './components/TodoList';
import { todoAPI } from '../../core/api';


class ToDoListImpl extends React.Component<IProps, IState> {
  state: IState = {
    filter: null,
  };

  public componentDidMount() {
    this.props.getAllRecords();

    todoAPI.getAll()
      .then(result => {
        console.log(result);
      });
  }

  public render() {
    if (this.props.isLoading) {
      return <Preloader />;
    }

    return (
      <div>
        <TodoList
          list={this.props.records}
          updateItem={item => this.props.updateRecord(item)}
          removeItem={item => this.props.deleteRecord(item)}
        />
      </div>
    );
  }
}

const mapState = state => ({
  isLoading: selectToDoIsLoading(state),
  records: selectToDoList(state),
});

const mapDispatch = {
  getAllRecords: todoGetAll,
  addRecord: todoCreate,
  updateRecord: todoUpdate,
  deleteRecord: todoDelete,
};

export default connect(mapState, mapDispatch)(ToDoListImpl);

interface IProps {
  isLoading: boolean;
  records: ITodoItem[];
  getAllRecords: typeof todoGetAll;
  updateRecord: (item: ITodoItem) => void;
  deleteRecord: (item: ITodoItem) => void;
}

interface IState {
  filter: boolean;
}
