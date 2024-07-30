import {Button, Form, Input, Space} from 'antd';
import ToDoItem from '../toDoItem';
import { useState } from 'react';
import './index.css';
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
        <ToDoItem todos={todos}/>
    </Form.Item>
    </div>
    </Space>
 </Form>  

   )
}
export default ToDoList;
