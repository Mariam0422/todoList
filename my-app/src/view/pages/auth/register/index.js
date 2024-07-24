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
    setLoading(true);
    try{
    createUserWithEmailAndPassword(auth, email, password);   
      notification.success({
        message: "Success Register",
        description: `Hello ${firstName} ${lastName}`
      })   
      setformValues({
        firstName: "",
        lastName: "",
        headLine: "",
        email: "",
        password: ""
      })  
    }  catch(error){
      notification.error({
        message: "Error Register",
        description: "oooooops"
      })
    }
    finally{
      setLoading(false);
     }

  }
    return ( 
        <div className='register_form'>      
          <Title level={2}>
          Register
         </Title>
         
         <Form layout='vertical' onValuesChange={handleChangeInput}>
         <Form.Item name='firstName' label="First Name">
          <Input type='text'  placeholder='first name'  value={formValues.firstName}/>
         </Form.Item>
         <Form.Item name='lastName' label="Last Name">
          <Input type='text' placeholder='last name' value={formValues.lastName}
           />
         </Form.Item>
         <Form.Item name='headLine' label="Headline">
          <Input type='text'  placeholder='headLine' value={formValues.headLine}
          />
         </Form.Item>
         <Form.Item name='email' label="Email">
          <Input type='email'  placeholder='email'   value={formValues.email}
           />
         </Form.Item>
         <Form.Item name='password' label="Password">
          <Input.Password  placeholder='password'   value={formValues.password}
            />
         </Form.Item>
         <Divider/>
         <Button className='button'  onClick={handleRegister} loading={loading}>Register</Button>
         </Form>
        </div>
    )
}
export default Register;