import { useQuery } from "@tanstack/react-query";
import jsonplaceholderApi from "../api/jsonplaceholderApi";

function useComments(postId: number) {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => jsonplaceholderApi.getComments(postId),
    enabled: !!postId,
  })
}

export default useComments;
