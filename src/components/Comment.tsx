import { IComment } from "@/lib/interfaces";
import { Avatar } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function Comment({ body, email }: IComment) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex gap-2 items-center">
            <Avatar className="uppercase bg-neutral-500 flex justify-center items-center">
              {email[0]}
            </Avatar>
            <h2>{email}</h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>

        <p className="text-[#e1e1e1] text-sm">{body}</p>
      </CardContent>
    </Card>
  )
}

export default Comment;