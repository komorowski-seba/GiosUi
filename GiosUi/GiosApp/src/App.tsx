import React from 'react';
import { Layout, Menu } from 'antd';
import { EnvironmentOutlined, DatabaseOutlined } from '@ant-design/icons';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { diContainer } from '../src/app/services/di-container.service';
import { OpenMeteoWeatherService } from '../src/infrastructure/open-meteo-api/open-meteo-weather.service';

import { MapView } from '../src/app/views/map.view';
import { ListView } from '../src/app/views/list.view';

// di services
diContainer.register<IWeather>(
    'IWeather',
    new OpenMeteoWeatherService()
);

const { Sider, Content } = Layout;
const queryClient = new QueryClient();

const AppLayout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedKey = location.pathname;
    
    return (
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
};

const App: React.FC = (): Element => {
    return (
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    );
};

export default App;