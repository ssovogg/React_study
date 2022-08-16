import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'; // 조건부 스타일링
import './TodoListItem.scss'

const TodoListItem = ({ todo }) => {
  const {text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem;