import GalleryContainer from "@/components/GalleryContainer"
import Hero from "@/components/Hero"
import getPhotos from "@/lib/Unsplash"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function Home() {
  const photos = await getPhotos(1, "&per_page=50")
  return (
    <>
      <main>
        <Hero />

        <GalleryContainer photos={photos} />

        <div className="flex justify-center">
          <Link href="/gallery">
            <Button className="w-96">See More</Button>
          </Link>
        </div>

        <footer className="h-20 w-full bg-black flex items-center justify-center">
          <h1 className="text-5xl">Footer</h1>
        </footer>
      </main>
    </>
  )
}
