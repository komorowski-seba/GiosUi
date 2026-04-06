import React from 'react';
import { Layout, Menu } from 'antd';
import { EnvironmentOutlined, DatabaseOutlined } from '@ant-design/icons';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../src/app/stores/store';
import { MapView } from '../src/app/views/MapView';
import { ListView } from '../src/app/views/ListView';

const { Sider, Content } = Layout;

const AppLayout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedKey = location.pathname;
    
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    onClick={(e) => navigate(e.key)}
                    items={[
                        {
                            key: "/map",
                            icon: <EnvironmentOutlined />,
                            label: "Map",
                        },
                        {
                            key: "/stations",
                            icon: <DatabaseOutlined />,
                            label: "Stations",
                        },
                    ]}
                />
            </Sider>

            <Layout>
                <Content style={{ margin: "16px" }}>
                    <Routes>
                        <Route path="/map" element={<MapView />} />
                        <Route path="/stations" element={<ListView />} />
                        <Route path="*" element={<Navigate to="/map" />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </Provider>
    );
};

export default App;