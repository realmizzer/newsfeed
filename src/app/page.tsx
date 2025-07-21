'use client';

import Image from 'next/image';
import { Provider } from 'react-redux';
import { Flex, Layout, Typography } from 'antd';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import { NewsList } from '@/widgets/news-feed';
import { store } from '@/shared/config/store';
import AuthorImage from '@/shared/assets/images/author.jpeg';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export default function Home() {
  const screens = useBreakpoint();

  const getLayoutHorizontalPadding = () => {
    if (screens.xxl) return 180;
    if (screens.xl) return 180;
    if (screens.lg) return 60;
    if (screens.md) return 60;
    if (screens.xs) return 30;
    return 30;
  };

  const isMobile = !screens.md || !screens.lg;

  return (
    <Provider store={store}>
      <Layout
        style={{
          padding: `16px ${getLayoutHorizontalPadding()}px`,
          minHeight: '100vh',
          gap: isMobile ? 16 : 32,
        }}
      >
        <Header
          style={{
            flex: 1,
            padding: 0,
            backgroundColor: 'transparent',
          }}
        >
          <Flex vertical={isMobile} justify={'space-between'} align={'center'}>
            <Flex align={'center'}>
              <Title
                level={1}
                style={{ margin: 0, marginBottom: isMobile ? 8 : 0 }}
              >
                Newsfeed
              </Title>
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
