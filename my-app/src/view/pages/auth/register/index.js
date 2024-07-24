import { useState } from 'react';
import {Typography, Input, Divider, Button, Form, notification} from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../services/firebase/firebase';
import './index.css';

const {Title} = Typography;
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setformValues] = useState({
    firstName: "",
    lastName: "",
    headLine: "",
    email: "",
    password: ""
  });

  const handleChangeInput = (e, allvalues) => {
   setformValues(allvalues);
  }
  const handleRegister = () => {
    const {email, password, firstName, lastName} = formValues;  
    try{
    const response =  createUserWithEmailAndPassword(auth, email, password);
    console.log(email);
    console.log(response)
      notification.success({
        message: "Success Register",
        description: `Hello ${firstName} ${lastName}`
      })
    }
    catch{
      notification.error({
        message: "Success Register",
      })
    }
    finally{
      
    }

  }
    return ( 
        <div className='register_form'>
          <Title level={2}>
          Register
         </Title>
         <Form layout='vertical' onValuesChange={handleChangeInput}>
         <Form.Item name='firstName' label="First Name">
          <Input type='text'  placeholder='first name' />
         </Form.Item>
         <Form.Item name='lastName' label="Last Name">
          <Input type='text' placeholder='last name' />
         </Form.Item>
         <Form.Item name='headLine' label="Headline">
          <Input type='text'  placeholder='headLine' />
         </Form.Item>
         <Form.Item name='email' label="Email">
          <Input type='email'  placeholder='email' />
         </Form.Item>
         <Form.Item name='password' label="Password">
          <Input.Password  placeholder='password' />
         </Form.Item>
         <Divider/>
         <Button type='primary' onClick={handleRegister}>Register</Button>
         </Form>
        </div>
    )
}
export default Register;