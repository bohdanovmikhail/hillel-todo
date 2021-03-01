import * as React from 'react';
import { connect } from 'react-redux';
import { selectToDoList, todoCreate, todoDelete, todoFetch, todoUpdate } from '../../core/store/todo';
import { selectToDoIsLoading } from '../../core/store/todo';
import { ITodoItem } from '../../core/types';
import { Preloader } from '../../components/Preloader';
import { TodoList } from './components/TodoList';


class ToDoListImpl extends React.Component<IProps, IState> {
  state: IState = {
    filter: null,
  };

  public componentDidMount() {
    this.props.getAllRecords();
  }

  public render() {
    if (this.props.isLoading) {
      return <Preloader />;
    }

    return (
      <div>
        <TodoList list={this.props.records} />
      </div>
    );
  }
}

const mapState = state => ({
  isLoading: selectToDoIsLoading(state),
  records: selectToDoList(state),
});

const mapDispatch = {
  getAllRecords: todoFetch,
  addRecord: todoCreate,
  updateRecord: todoUpdate,
  deleteRecord: todoDelete,
};

export default connect(mapState, mapDispatch)(ToDoListImpl);

interface IProps {
  isLoading: boolean;
  records: ITodoItem[];
  getAllRecords: typeof todoFetch;
}

interface IState {
  filter: boolean;
}
