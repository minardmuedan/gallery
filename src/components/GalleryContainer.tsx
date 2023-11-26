import { Photo } from "@/models/Photos"
import Image from "next/image"
import Link from "next/link"

type Props = {
  photos: Photo[]
}

export default function GalleryContainer({ photos }: Props) {
  return (
    <div className="gallery columns-2 md:columns-3 lg:columns-4 gap-3 p-3">
      {photos.map((photo) => (
        <div
          key={photo.id}
          style={{ backgroundColor: photo.color }}
          className="rounded-xl overflow-hidden group mb-2"
        >
          <Link href={`/photo/${photo.id}`} className="cursor-zoom-in">
            <Image
              src={photo.urls.small}
              alt={photo.alt_description}
              width={photo.width}
              height={photo.height}
              quality={100}
              priority
              className="w-full object-contain group-hover:scale-110 transition-transform ease-in"
            />
          </Link>
        </div>
      ))}
    </div>

    // <div className="gallery columns-2 md:columns-3 lg:columns-4 gap-3 auto-rows-[100px]">

    // </div>
  )
}
