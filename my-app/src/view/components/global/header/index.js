import { Typography, Button, Space, Layout } from "antd";
import './index.css';
const Header = () => {
    return(
        <Layout.Header className="header">
            <div>
            <Typography.Title level={2}>ToDoList</Typography.Title>
            </div>
            <Space >
                <Button>Register</Button>
                <Button>Login</Button>
            </Space>
        </Layout.Header>
    )
}
export default Header