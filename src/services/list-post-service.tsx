import { useInfiniteQuery } from '@tanstack/react-query';

// https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20
const fetchPosts = async ({ pageParam = 0}) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page='+pageParam+'&_limit=20');
  return res.json();
}

const UsePosts = () => useInfiniteQuery(['fetchPosts'], fetchPosts, {
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
});

export default UsePosts;