'use client';

import Image from 'next/image';
import { Provider } from 'react-redux';
import { Flex, Layout, Typography } from 'antd';
import { store } from '@/shared/config/store';
import AuthorImage from '@/shared/assets/images/author.jpeg';
import { NewsList } from '@/widgets/news-feed';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export default function Home() {
  return (
    <Provider store={store}>
      <Layout style={{ padding: '16px 180px', minHeight: '100vh' }}>
        <Header
          style={{
            padding: 0,
            marginBottom: 16,
            backgroundColor: 'transparent',
          }}
        >
          <Flex justify={'space-between'} align={'center'}>
            <Flex align={'center'}>
              <Title style={{ margin: 0 }}>Newsfeed</Title>
            </Flex>
            <Flex gap={8} align={'center'}>
              <Image
                src={AuthorImage.src}
                alt={'Author'}
                width={32}
                height={32}
                style={{
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <Text type={'secondary'}>by Maxim Nikolaev</Text>
            </Flex>
          </Flex>
        </Header>
        <Content>
          <NewsList />
        </Content>
      </Layout>
    </Provider>
  );
}
