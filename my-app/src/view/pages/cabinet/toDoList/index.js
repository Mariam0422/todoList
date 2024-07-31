import {Button, Form, Input, Space} from 'antd';
import ToDoItem from '../toDoItem';
import { useState } from 'react';
import './index.css';
import ToDoFooter from '../toDoFooter';
const ToDoList = () => {
    const [form] = Form.useForm();
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([
        {
           id: Math.random(),
           text: "Learn JS", 
           completed: false
        }
    ])
    const handleChangeInput = (e) => {
      setText(e.target.value);
    }
    const handleOnAdd = () => {
        if(!text.length){
            return
        }
        setTodos([
            ...todos,
            {
             id: Math.random(),
             text: text, 
             completed: false 
            },
        ]);
        setText("");
        form.resetFields();
    } 
    const onDelete = (todo) => {
     setTodos(todos.filter((t) => t.id !== todo.id))
    }
    const handleCheckboxChange = (todo) => {
        setTodos(todos.map(item =>
          item.id === todo.id
            ? { ...item, completed: !item.completed } 
            : item
        ));
      };
    const onClearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
   
    }  
return ( 
       
 <Form form={form} onFinish={handleOnAdd} className='todoList'>
    <Space direction='vertical'>  
    <div style={{display: "flex"}}>
    <Form.Item name="text">
        <Input type='text' onChange={handleChangeInput} style={{width: "350px"}}/>
    </Form.Item>
    <Form.Item>
        <Button htmlType='submit' style={{marginLeft: "10px"}}>Add</Button>
    </Form.Item>            
    </div>
    <div>
    <Form.Item>
        <ToDoItem todos={todos} onDelete={onDelete} onChange={handleCheckboxChange}/>
    </Form.Item>
    </div>
    <Form.Item>
        <ToDoFooter todos = {todos} clear = {onClearCompleted}/>
    </Form.Item>
    </Space>
 </Form>  

   )
}
export default ToDoList;
