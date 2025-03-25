import { useQuery } from "@tanstack/react-query";
import jsonplaceholderApi from "../api/jsonplaceholderApi";

function useUser(id: number) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => jsonplaceholderApi.getUserById(id),
  })
}

export default useUser;
