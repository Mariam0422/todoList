

const ToDoItem = ({todos}) => {

  return(
    <div>
       {todos.map((item) => {
     return (
        <div key={item.id}>
         <h2>{item.text}</h2>
        </div>
     )
    })}
    </div>
  )
}
export default ToDoItem;