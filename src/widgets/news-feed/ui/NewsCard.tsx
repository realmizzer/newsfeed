import React from 'react';
import { Card, Tag, Typography } from 'antd';
import { Post } from '@/entities/post';

const { Text, Title } = Typography;

interface NewsCardProps {
  post: Post;
}

export const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Title level={4}>{post.title}</Title>
      <Text style={{ display: 'block', marginBottom: 12 }}>{post.body}</Text>
      <div style={{ marginBottom: 12 }}>
        {post.tags.map((tag) => (
          <Tag key={tag} color="blue">
            {tag}
          </Tag>
        ))}
      </div>
      <Text type="secondary">Views: {post.views}</Text>
    </Card>
  );
};
