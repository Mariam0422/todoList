import {Button, Form, Input, Space} from 'antd';
import ToDoItem from './todoItem';
import { useState } from 'react';

const Cabinet = () => {
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
 <Form form={form} onFinish={handleOnAdd}>
    <Space direction='vertical'>  
    <div style={{display: "flex"}}>
    <Form.Item name="text">
        <Input type='text' onChange={handleChangeInput}/>
    </Form.Item>
    <Form.Item>
        <Button htmlType='submit'>Add</Button>
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
export default Cabinet;
