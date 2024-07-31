import { Button } from "antd";
import "./index.css";
const ToDoFooter = ({todos, clear}) => {
    let size = todos.length;
    let completedItem = todos.filter((todo) => todo.completed).length
return (
    <div className="footer">
     Completed {completedItem}/{size}
     <Button onClick={clear}>Clear Completed</Button>
    </div>
)
}
export default ToDoFooter;