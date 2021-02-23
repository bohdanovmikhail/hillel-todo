import React from 'react';
import { ITodoItem } from '../../../../core/types';

export class TodoForm extends React.Component<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    onDoneText: 'Save',
  };

  constructor(props: IProps) {
    super(props);

    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.clickSaveButtonHandler = this.clickSaveButtonHandler.bind(this);

    this.state = {
      text: props.item ? props.item.text : '',
    };
  }

  public render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.changeInputHandler}
        />

        <button onClick={this.clickSaveButtonHandler}>
          {this.props.onDoneText}
        </button>
      </div>
    );
  }

  private changeInputHandler(event) {
    this.setState({
      text: event.target.value,
    });
  }

  private clickSaveButtonHandler() {
    const itemData: RequiredFTodoItemFields = {
      text: this.state.text,
    };

    this.props.onDone(itemData);
  }
}

interface IProps {
  item?: ITodoItem;
  onDone: (item: RequiredFTodoItemFields) => void;
  onDoneText?: string;
}

interface IState {
  text: string;
}

type RequiredFTodoItemFields = Pick<ITodoItem, 'text'> & Partial<ITodoItem>;
