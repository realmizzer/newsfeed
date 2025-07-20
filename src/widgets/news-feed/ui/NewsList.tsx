import React from 'react';
import { Alert, Spin, Typography } from 'antd';
import { NewsCard } from '@/widgets/news-feed';
import { Post, useGetPostsQuery } from '@/entities/post';
import { useInfiniteScroll } from '@/features/infinite-scroll';

const { Text } = Typography;
const PAGE_SIZE = 10;

export const NewsList = () => {
  const [skip, setSkip] = React.useState(0);
  const [loadedPosts, setLoadedPosts] = React.useState<Post[]>([]);
  const { data, error, isLoading, isFetching } = useGetPostsQuery({
    limit: PAGE_SIZE,
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

  const hasMore = data ? skip + PAGE_SIZE < data.total : false;

  const { loaderRef } = useInfiniteScroll({
    hasMore,
    isLoading: isFetching,
    onLoadMore: () => setSkip((prev) => prev + PAGE_SIZE),
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
    <div>
      {loadedPosts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}

      <div ref={loaderRef} style={{ textAlign: 'center', padding: '20px' }}>
        {isFetching && <Spin />}
        {!hasMore && !isFetching && loadedPosts.length > 0 && (
          <Text type="secondary">No more posts to load</Text>
        )}
      </div>
    </div>
  );
};
