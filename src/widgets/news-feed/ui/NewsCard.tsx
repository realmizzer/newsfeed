import React from 'react';
import { Card, Flex, Space, Tag, Typography } from 'antd';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { Post } from '@/entities/post';

const { Text, Title, Paragraph } = Typography;

interface NewsCardProps {
  post: Post;
}

export const NewsCard = (props: NewsCardProps) => {
  const { post } = props;

  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
      }}
      styles={{
        body: {
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '16px',
        },
      }}
    >
      <Title level={4} style={{ margin: '0 0 12px 0' }}>
        {post.title}
      </Title>
      <Paragraph
        ellipsis={{
          rows: 3,
          expandable: false,
        }}
      >
        {post.body}
      </Paragraph>
      <Flex vertical style={{ marginTop: 'auto' }}>
        {/* Tags */}
        <Flex gap={8} style={{ marginBottom: 12 }} wrap>
          {post.tags.map((tag) => (
            <Tag key={tag} color={'blue'} style={{ margin: 0 }}>
              {tag}
            </Tag>
          ))}
        </Flex>
        {/* Stats */}
        <Flex justify={'space-between'}>
          <Text type={'secondary'}>Views: {post.views}</Text>
          <Space size={12}>
            <Space size={4}>
              <LikeOutlined style={{ color: '#5ac841' }} />
              <Text style={{ color: '#5ac841' }}>{post.reactions.likes}</Text>
            </Space>
            <Space size={4}>
              <DislikeOutlined style={{ color: '#FB4141' }} />
              <Text style={{ color: '#FB4141' }}>
                {post.reactions.dislikes}
              </Text>
            </Space>
          </Space>
        </Flex>
      </Flex>
    </Card>
  );
};
