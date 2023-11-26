import { Photo } from "@/models/Photos"
import Image from "next/image"
import { Button } from "./ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { HeartIcon } from "lucide-react"
import Link from "next/link"

export default function SinglePhoto({ photo }: { photo: Photo }) {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center justify-center gap-2 ">
          <Avatar>
            <AvatarImage src={photo.user.profile_image.medium} />
            <AvatarFallback>{photo.user.name.slice(0, 2)}</AvatarFallback>
          </Avatar>

          <p>
            <b>{photo.user.name}</b>
          </p>
        </div>
        <Button>Download</Button>
      </div>

      <div className="">
        <Image
          src={photo.urls.regular}
          alt={photo.alt_description}
          width={photo.width}
          height={photo.height}
          quality={100}
          style={{ background: photo.color }}
          className="object-contain max-h-screen rounded-md"
        />
      </div>

      <div className=" border p-2 mt-2">
        <div className="mb-2 flex items-center gap-2">
          <HeartIcon />
          <p>{photo.likes}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {photo.tags.map((tag, i) => (
            <Link key={i} href={`/${tag.title}`}>
              <p className="px-2 py-1 bg-accent rounded-xl">{tag.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
