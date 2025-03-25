import { useQuery } from "@tanstack/react-query";
import jsonplaceholderApi from "../api/jsonplaceholderApi";

function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => jsonplaceholderApi.getUsers(),
  })
}

export default useUsers;
