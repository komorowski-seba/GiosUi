import { Layout, Menu } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import DetailsDrawer from '../components/DetailsDrawer';

const { Sider, Content } = Layout;

export default function LeftSidebarComponent() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider>
                <Menu
                    theme="dark"
                    selectedKeys={[location.pathname]}
                    onClick={(e) => navigate(e.key)}
                    items={[
                        { key: "/", label: "Widok A" },
                        { key: "/view-b", label: "Widok B" },
                    ]}
                />
            </Sider>

            <Content style={{ padding: 20 }}>
                <Outlet />
            </Content>

            <DetailsDrawer />
        </Layout>
    );
}