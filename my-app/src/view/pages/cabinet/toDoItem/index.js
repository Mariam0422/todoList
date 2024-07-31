import { Checkbox, Button } from "antd";
import './index.css';
const ToDoItem = ({todos, onDelete, onChange}) => {
    
  return(
    <div>
       {todos.map((item) => {
     return (
        <div key={item.id} className="todoItem">
          <div className="boxText">
        <Checkbox onClick={() => {onChange(item)}}/>
        <div>       
         <h2>{item.text}</h2>
         </div> 
        </div>
        <Button onClick={() => onDelete(item)}>X</Button>
        </div>
     )
    })}
    </div>
  )
}
export default ToDoItem;