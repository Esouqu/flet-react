import { useQueries } from "@tanstack/react-query";
import jsonplaceholderApi from "../api/jsonplaceholderApi";

function usePostsWithUsers() {
  // Fetch both posts and users in parallel
  const results = useQueries({
    queries: [
      {
        queryKey: ['posts'],
        queryFn: () => jsonplaceholderApi.getPosts(),
      },
      {
        queryKey: ['users'],
        queryFn: () => jsonplaceholderApi.getUsers(),
      },
    ],
  });

  const [postsResult, usersResult] = results;
  const posts = postsResult.data || [];
  const users = usersResult.data || [];

  // Combine posts with user data
  const postsWithUsers = posts.map(post => ({
    ...post,
    user: users.find((user) => user.id === post.userId),
  }));

  return {
    posts: postsWithUsers,
    isLoading: postsResult.isLoading || usersResult.isLoading,
    isError: postsResult.isError || usersResult.isError,
    error: postsResult.error || usersResult.error,
  };
};

export default usePostsWithUsers;
