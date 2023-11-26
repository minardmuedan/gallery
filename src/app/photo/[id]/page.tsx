import SinglePhoto from "@/components/SinglePhoto"
import { getSinglePhoto } from "@/lib/Unsplash"

type Props = {
  params: {
    id: string
  }
}

export default async function Photo({ params }: Props) {
  const photo = await getSinglePhoto(params.id)

  return (
    <main>
      <SinglePhoto photo={photo} />
    </main>
  )
}
