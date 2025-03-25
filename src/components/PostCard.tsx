import { IPost, IUser } from "@/lib/interfaces";
import { useContext } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { AppContext } from "@/lib/contexts/AppContext";

interface Props {
  post: IPost & { user?: IUser };
  isCached: boolean;
  isCompact?: boolean;
}

function PostCard({ post, isCached, isCompact = true }: Props) {
  const appContext = useContext(AppContext);

  console.log(isCompact)
  return (
    <a
      href="#"
      className="group w-full cursor-default"
      onClick={() => appContext?.setPost(post)}
      data-is-cached={isCached} data-is-compact={isCompact}
    >
      <Card className="group-data-[is-cached=true]:opacity-50 group-data-[is-cached=true]:hover:opacity-100 group-data-[is-compact=true]:hover:outline-2 group-data-[is-compact=true]:hover:outline-white transition duration-200" >
        <CardHeader>
          <CardTitle className="flex flex-col overflow-hidden text-2xl group-data-[is-compact=true]:text-base ">
            <p className="text-sm m-0 font-normal">{post.user?.username || ''}</p>
            <p className="group-data-[is-compact=true]:truncate">{post.title}</p>
          </CardTitle>
          <CardDescription className="group-data-[is-compact=true]:line-clamp-2 group-data-[is-compact=true]:text-muted-foreground text-foreground">
            {post.body}
          </CardDescription>
        </CardHeader>
      </Card>
    </a>
  )
}

export default PostCard;
