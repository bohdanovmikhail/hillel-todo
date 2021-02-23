import { ITodoItem } from '../../../../core/types';


export function TodoItem(props: IProps) {
  return (
    <div>
      {props.item.text}
    </div>
  );
}

interface IProps {
  item: ITodoItem;
}
