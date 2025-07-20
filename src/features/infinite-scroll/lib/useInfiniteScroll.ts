import { useEffect, useRef } from 'react';
import { InfiniteScrollOptions } from '../model/types';

export const useInfiniteScroll = ({
  hasMore,
  isLoading,
  threshold = 1.0,
  rootMargin = '0px',
  onLoadMore,
}: InfiniteScrollOptions) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          onLoadMore();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentLoader = loaderRef.current;

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasMore, isLoading, onLoadMore, threshold, rootMargin]);

  return { loaderRef };
};
