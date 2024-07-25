import { useState } from 'react';
import { Typography, Input, Divider, Button, Form, notification, Select } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, getDoc, setDoc, doc, db } from '../../../../services/firebase/firebase';
import RegisterCover from '../../../../core/images/register.png'
import AuthWrapper from '../../../components/shared/AuthWrapper';

const {Title} = Typography;
const option = [
  {
    value: "student",
    label: "Student"
  },
  {
    value: "teacher",
    label: "Teacher"
  }
]
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setformValues] = useState({
    userValue: "",
    firstName: "",
    lastName: "",
    headLine: "",
    email: "",
    password: ""
  });

  const handleChangeInput = (e, allvalues) => {
   setformValues(allvalues);
  }
  const handleRegister = async () => {
    const { userValue, email, password, firstName, lastName, headLine} = formValues;  
    setLoading(true);
    try{
    const response = await createUserWithEmailAndPassword(auth, email, password);   
     const uid = response.user.uid;
     const createDoc = doc(db, "registerUsers", uid);
     setDoc(createDoc, {
      userValue, firstName, lastName, headLine
     })
    notification.success({
        message: "Success Register",
        description: `Hello ${firstName} ${lastName}`
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
console.log(formValues)
    return ( 
        <AuthWrapper coverImg={RegisterCover}>      
          <Title level={2}>
          Register
         </Title>         
         <Form layout='vertical' onValuesChange={handleChangeInput}>
          <Form.Item label="Register for" name="userValue">
            <Select options={option} placeholder="Student"/>        
            
          </Form.Item>
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
         <Button className='button' onClick={handleRegister} loading={loading}>Register</Button>
         </Form>
        </AuthWrapper>
    )
}
export default Register;