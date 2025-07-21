import React from 'react';
import { Alert, Spin, Typography } from 'antd';
import { NewsCard } from './NewsCard';
import { useNewsGrid } from '../lib/useNewsGrid';
import { useInfiniteScroll } from '@/features/infinite-scroll';
import { Post, useGetPostsQuery } from '@/entities/post';

const { Text } = Typography;

export const NewsList: React.FC = () => {
  const { pageLimit, columns } = useNewsGrid();

  const [skip, setSkip] = React.useState(0);
  const [loadedPosts, setLoadedPosts] = React.useState<Post[]>([]);
  const { data, error, isLoading, isFetching } = useGetPostsQuery({
    limit: pageLimit,
    skip,
  });

  React.useEffect(() => {
    if (data?.posts) {
      setLoadedPosts((prev) => {
        const newPosts = data.posts.filter(
          (newPost) => !prev.some((prevPost) => prevPost.id === newPost.id)
        );
        return [...prev, ...newPosts];
      });
    }
  }, [data]);

  const hasMore = data ? skip + pageLimit < data.total : false;

  const { loaderRef } = useInfiniteScroll({
    hasMore,
    isLoading: isFetching,
    onLoadMore: () => setSkip((prev) => prev + pageLimit),
    threshold: 0.5,
  });

  if (isLoading && loadedPosts.length === 0) {
    return (
      <Spin size="large" style={{ display: 'block', margin: '20px auto' }} />
    );
  }

  if (error) {
    return <Alert message="Error loading posts" type="error" />;
  }

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '24px 16px',
          alignItems: 'stretch',
        }}
      >
        {loadedPosts.map((post) => (
          <div key={post.id} style={{ display: 'flex', height: '100%' }}>
            <NewsCard post={post} />
          </div>
        ))}
      </div>

      <div ref={loaderRef} style={{ textAlign: 'center', padding: '20px' }}>
        {isFetching && <Spin />}
        {!hasMore && !isFetching && loadedPosts.length > 0 && (
          <Text type="secondary">No more posts to load</Text>
        )}
      </div>
    </>
  );
};
