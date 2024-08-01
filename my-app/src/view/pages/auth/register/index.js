import { useState } from 'react';
import { Typography, Input, Divider, Button, Form, notification, Select, Radio, DatePicker, } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, setDoc, doc, db } from '../../../../services/firebase/firebase';
import RegisterCover from '../../../../core/images/register.png'
import AuthWrapper from '../../../components/shared/AuthWrapper';
import { useNavigate } from "react-router-dom";
import './index.css'

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
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();
  const [form] = Form.useForm();
  
  const handleDateChange = (date, dateString) => {
    setDateOfBirth(dateString);
  };

  const handleRegister = async (values) => {
    const { userValue, email, password, firstName, lastName, headLine, gender} = values;  
    setLoading(true);
    try{
    const response = await createUserWithEmailAndPassword(auth, email, password);   
     const uid = response.user.uid;
     const createDoc = doc(db, "registerUsers", uid);
     setDoc(createDoc, {
      userValue, firstName, lastName, gender, headLine, dateOfBirth
     })
    notification.success({
        message: "Success Register",
        description: `Hello ${firstName} ${lastName}`
      })   
      form.resetFields();
      navigate("/login");
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
        <AuthWrapper coverImg={RegisterCover}  maxWidth="700px" >        
          <Title level={2}>
          Register
         </Title>         
         <Form layout='vertical' form={form} onFinish={handleRegister}>
          <div className='registerForm'>
          <div>        
          <Form.Item label="Register for" name="userValue"
           rules={[
            {required: true, message: "Please input User Type"}
        ]}>
            <Select options={option} placeholder="Student"/>      
          </Form.Item>
         <Form.Item name='firstName' label="First Name"
          rules={[
            {required: true, message: "Please input First Name"}
        ]}>
          <Input type='text'  placeholder='first name'  />
         </Form.Item>
         <Form.Item name='lastName' label="Last Name"
          rules={[
            {required: true, message: "Please input Last Name"}
        ]}>
          <Input type='text' placeholder='last name' 
           />
         </Form.Item>
         <Form.Item label="Gender" name="gender">
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
          </Radio.Group>
          </Form.Item>       
         </div>


         <div>
          <Form.Item label="Select your date of birth">
         <DatePicker onChange={handleDateChange} style={{width: "200px"}}/>
          </Form.Item>
         <Form.Item name='headLine' label="Headline"
          rules={[
            {required: true, message: "Please input Headline"}
        ]}>
          <Input type='text'  placeholder='headLine' 
          />
         </Form.Item>
             <Form.Item name='email' label="Email"
              rules={[
                {required: true, message: "Please input email"}
            ]}>
          <Input type='email'  placeholder='email' 
           />
         </Form.Item>
         <Form.Item name='password' label="Password"
          rules={[
            {required: true, message: "Please input Password"}
        ]}>
          <Input.Password  placeholder='password'  
            />
         </Form.Item>       
         </div>
         </div>
         <Divider/>
         <Button className='button' htmlType='submit' loading={loading}>Register</Button>
         </Form>
        </AuthWrapper>
    )
}
export default Register;