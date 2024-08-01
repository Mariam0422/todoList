import { useState } from "react";
import { Form, Input, Button, Typography, notification } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../services/firebase/firebase";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import loginCover from "../../../../core/images/login.png";
import { Link, useNavigate } from "react-router-dom";
import './index.css';


const Login = () => {
   
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();
   
     const handleLogin = async(values) => {
      setLoading(true);
      const {email, password} = values;
      try{
        const respons = await signInWithEmailAndPassword(auth, email, password);
        console.log(respons);
        notification.success({
            message: "Login successful",            
        })
        form.resetFields();
        navigate("/cabinet");
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
       <Form layout="vertical" form={form} onFinish={handleLogin}>
        <Form.Item label="Email" name="email"
        rules={[
            {required: true, message: "Please input email"}
        ]}>
         <Input type="text" placeholder="Email"/>
        </Form.Item>
        <Form.Item label="Password" name="password"
         rules={[
            {required: true, message: "Please input password"}
        ]}>
        <Input.Password type="text" placeholder="Password" />
        </Form.Item>  
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Form.Item>
            <Typography.Text underline>
              <Link to="/register">
              Create Account
              </Link>
            </Typography.Text>
        </Form.Item>
        <Form.Item>
            <Button size="large" htmlType="submit" loading={loading}>Log In</Button>
        </Form.Item>
        </div>
      
       </Form>
       </div>
       </AuthWrapper>
    )
}
export default Login;