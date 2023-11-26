import SinglePhoto from "@/components/SinglePhoto"
import { getSinglePhoto } from "@/lib/Unsplash"

type Props = {
  params: {
    id: string
  }
}

export default async function PhotoModal({ params }: Props) {
  const photo = await getSinglePhoto(params.id)
  return <SinglePhoto photo={photo} />
}
