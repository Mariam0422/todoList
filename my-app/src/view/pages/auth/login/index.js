import { Form, Input, Button, Typography, notification } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../services/firebase/firebase";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import loginCover from "../../../../core/images/login.jpg"
import './index.css';
import { useState } from "react";

const Login = () => {
    const [formValue, setformValue] = useState({
        email: "",
        password: "",      
    });
    const [loading, setLoading] = useState(false)
     const handleChangeInput = (e, allvalues) => {
     setformValue(allvalues);
    }
     const handleLogin = async() => {
      setLoading(true);
      const {email, password} = formValue;
      try{
        const respons = await signInWithEmailAndPassword(auth, email, password);
        console.log(respons);
        notification.success({
            message: "Login successful",            
        })
      }catch(error){
        console.log(error);
        notification.error({
            message: "Incorrect login details"
        })
      }
      finally{
       setLoading(false)
      }
     }
    return(
        <AuthWrapper coverImg={loginCover} maxWidth="550px">
        <div className="loginForm">       
       <Typography.Title level={1}>
        Sign In
       </Typography.Title>
       <Form layout="vertical" onValuesChange={handleChangeInput}>
        <Form.Item label="Email" name="email">
         <Input type="text" placeholder="Email"/>
        </Form.Item>
        <Form.Item label="Password" name="password">
         <Input.Password type="text" placeholder="Password" />
        </Form.Item>  
        <Form.Item>
            <Button size="large" loading={loading} onClick={handleLogin}>Log In</Button>
        </Form.Item>
       </Form>
       </div>
       </AuthWrapper>
    )
}
export default Login;