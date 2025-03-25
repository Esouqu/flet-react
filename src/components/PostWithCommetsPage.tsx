import useComments from "@/lib/hooks/useComments";
import Comment from "./Comment";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import PostCard from "./PostCard";
import { useContext } from "react";
import { AppContext } from "@/lib/contexts/AppContext";

function PostWithCommetsPage() {
  const appContext = useContext(AppContext);
  const { status, data, error } = useComments(appContext?.post?.id || -1);

  return (
    <div className="flex gap-4 flex-col">
      <Button variant="default" className="cursor-pointer" onClick={() => appContext?.setPost(null)}>Back</Button>
      {!appContext?.post ? (
        <Skeleton className="h-20" />
      ) : (
        <PostCard post={appContext.post} isCompact={false} isCached={false} />
      )}
      <h2 className="font-medium">Comments</h2>
      <div className="flex gap-3 flex-col">
        {status === 'pending' ? (
          <>
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
          </>
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            {data.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default PostWithCommetsPage;
