'use client';

import { Provider } from 'react-redux';
import { Layout, Typography } from 'antd';
import { store } from '@/shared/config/store';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Home() {
  return (
    <Provider store={store}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Title style={{ color: 'white', margin: 0 }}>Newsfeed</Title>
        </Header>
        <Content style={{ padding: '24px 50px' }}>{/* news card*/}</Content>
      </Layout>
    </Provider>
  );
}
