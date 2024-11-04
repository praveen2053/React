import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';
import ApiFetch from './ApiFetch';

const { Header, Content, Footer, Sider } = Layout;

const items1 = ['React works'].map((key) => ({
  key,
  label: ` ${key}`,
}));

const items2 = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'HOME',
  },
  {
    key: '2',
    icon: <LaptopOutlined />,
    label: 'ABOUT US',
  },
  {
    key: '3',
    icon: <NotificationOutlined />,
    label: 'CONTACT',
  },
  {
    key: '4',
    icon: <UserOutlined />,
    label: 'About',
  },
];

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0}}
        />
      </Header>
      <Content style={{ padding: '0 48px'}}>
        
        <Layout style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%'}}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <ApiFetch />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Praveen {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;
