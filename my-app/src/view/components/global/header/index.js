import { Typography, Button, Space, Layout } from "antd";
import { Link } from "react-router-dom";
import './index.css';
const Header = () => {
    return(
        <Layout.Header className="header">
            <div>
            <Typography.Title level={2}>ToDoList</Typography.Title>
            </div>
            <Space >
                <Link to="/register">
                <Button>Register</Button>
                </Link>
                <Link to="/login">
                <Button>Login</Button>
                </Link>
                
            </Space>
        </Layout.Header>
    )
}
export default Header