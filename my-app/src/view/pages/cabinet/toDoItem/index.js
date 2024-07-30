import { Checkbox, Button } from "antd";
import './index.css';
const ToDoItem = ({todos}) => {
    
  return(
    <div >
       {todos.map((item) => {
     return (
        <div key={item.id} className="todoItem">
          <div className="boxText">
        <Checkbox/>
        <div>       
         <h2>{item.text}</h2>
         </div> 
        </div>
        <Button>X</Button>
        </div>
     )
    })}
    </div>
  )
}
export default ToDoItem;