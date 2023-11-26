import { Photo } from "@/models/Photos"
const api_key = "go-r3kl6tiVVF4a_2Az3nP1S2G_GOM_y_iqjuYHx8CI"
const headers = {
  Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
}

export default async function getPhotos(
  page: number,
  perPage?: string
): Promise<Photo[]> {
  const res = await fetch(
    `https://api.unsplash.com/photos/?page=${page} ${perPage ? perPage : ""}`,
    {
      headers: headers,
    }
  )

  return res.json()
}

export async function getSinglePhoto(id: string): Promise<Photo> {
  const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers: headers,
  })

  return res.json()
}
