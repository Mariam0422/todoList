import { Form, Input, Button, Typography } from "antd";
import './index.css'
const Login = () => {
    return(
        <div className="loginForm">       
       <Typography.Title level={2}>
        Login
       </Typography.Title>
       <Form layout="vertical">
        <Form.Item label="Login" name="login">
         <Input type="text" />
        </Form.Item>
        <Form.Item label="Password" name="password">
         <Input type="text" />
        </Form.Item>  
        <Form.Item>
            <Button>Log In</Button>
        </Form.Item>
       </Form>
       </div>
    )
}
export default Login;