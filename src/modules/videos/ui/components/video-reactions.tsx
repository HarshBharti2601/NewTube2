import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Separator } from "@radix-ui/react-separator";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react"

import { VideoGetOneOutput } from "../../types";

interface VideoReactionsProps{
    videoId:string;
    likes:number;
    dislikes:number;
    viewerReaction:VideoGetOneOutput["viewerReaction"];
}

export const VideoReactions = ({
    videoId,
    likes,
    dislikes,
    viewerReaction,
}:VideoReactionsProps)=>{

    return (
        <div className="flex items-center flex-none">
           <Button
            variant="secondary"
            className="rounded-l-full rounded-r-none gap-2 pr-4"
           >
            <ThumbsUpIcon className={cn("size-5",viewerReaction ==="Like" && "fill-black")}/>
            {likes}
           </Button>
           <Separator orientation="vertical" className="h-7"/>
           <Button
            variant="secondary"
            className="rounded-l-none rounded-r-full  pl-3"
           >
            <ThumbsDownIcon className={cn("size-5",viewerReaction ==="dislike" && "fill-black")}/>
            {dislikes}
           </Button>

        </div>
    )
}