import { useQueryClient } from "@tanstack/react-query"
import PostCard from "./PostCard"
import { Skeleton } from "./ui/skeleton"
import usePostsWithUsers from "@/lib/hooks/usePostsWithUsers"
import { AppContext } from "@/lib/contexts/AppContext";
import { useContext } from "react";
import PostWithCommetsPage from "./PostWithCommetsPage";

function PostsPage() {
  const queryClient = useQueryClient();
  const appContext = useContext(AppContext);
  const { posts, error, isLoading } = usePostsWithUsers();

  const skeletons = Array.from({ length: 10 }).map((_, i) => (
    <Skeleton className="h-20" key={i} />
  ));

  return (
    <div className="flex flex-col gap-3">
      {appContext?.post ? (
        <PostWithCommetsPage />
      ) : isLoading ? (
        skeletons
      ) : error ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} isCached={!!queryClient.getQueryData(['post', post.id])} />
          ))}
        </>
      )}
    </div>
  )
}

export default PostsPage;
