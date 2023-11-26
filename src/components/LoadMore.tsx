"use client"

import react from "react"
import { Loader2 } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Photo } from "@/models/Photos"
import getPhotos from "@/lib/Unsplash"
import GalleryContainer from "./GalleryContainer"

export default function LoadMore() {
  const [page, setPage] = useState(2)
  const [photos, setPhotos] = useState<Photo[]>([])

  const loadMorePhotos = async () => {
    const nextPage = page + 1
    const newPhotos = (await getPhotos(nextPage, "&per_page=30")) ?? []
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos])
    setPage(nextPage)
  }

  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView) {
      loadMorePhotos()
    }
  }, [inView])

  return (
    <>
      <GalleryContainer photos={photos} />
      <div ref={ref} className="h-16 flex items-center justify-center">
        <Loader2 size={30} className="animate-spin " />
      </div>
    </>
  )
}
