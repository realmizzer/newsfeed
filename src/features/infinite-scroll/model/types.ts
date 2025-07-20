export interface InfiniteScrollOptions {
  hasMore: boolean;
  isLoading: boolean;
  threshold?: number;
  rootMargin?: string;

  onLoadMore(): void;
}
