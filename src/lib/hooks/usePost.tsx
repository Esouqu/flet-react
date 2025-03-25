import { useQuery } from "@tanstack/react-query";
import jsonplaceholderApi from "../api/jsonplaceholderApi";

function usePost(postId: number) {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => jsonplaceholderApi.getPostById(postId),
    enabled: !!postId,
  })
}

export default usePost;
