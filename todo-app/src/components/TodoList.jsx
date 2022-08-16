import TodoListItem from "./TodoListItem"
import './TodoList.scss'

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id}/>
      ))}
    </div>
  )
}
// todo 데이터는 통째로 props로 전달.
// 여러 종류의 값을 전달해야 하는 경우, 객체로 통째로 전달하는 편이 성능최적화 할 때 편리

export default TodoList;