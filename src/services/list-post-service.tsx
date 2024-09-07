import { useInfiniteQuery } from "@tanstack/react-query";
import { PagingPostModel } from "../models/paging-post-model";
import { PostModel } from "../models/post-model";
import { client } from "./api-service";

// https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20
const fetchPosts = async ({ pageParam = 0 }): Promise<PagingPostModel> => {
  const result = await client.get<PostModel[]>(
    "posts?_page=" + pageParam + "&_limit=20"
  );
  return {
    nextPage: pageParam + 1,
    data: result.data,
  };
};

const UsePosts = () =>
  useInfiniteQuery({
    queryKey: ["fetchPosts"],
    queryFn: fetchPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data.length < 10) return undefined;
      return lastPage.nextPage;
    },
  });

export default UsePosts;
