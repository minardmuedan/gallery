import { z } from "zod"

const PhotoSchema = z.object({
  id: z.string(),
  width: z.number(),
  height: z.number(),
  color: z.string(),
  blur_hash: z.string(),
  description: z.string(),
  alt_description: z.string(),
  urls: z.object({
    regular: z.string(),
    small: z.string(),
  }),
  likes: z.number(),
  user: z.object({
    name: z.string(),
    profile_image: z.object({
      medium: z.string(),
    }),
  }),
  tags: z.array(
    z.object({
      title: z.string(),
    })
  ),
})

export type Photo = z.infer<typeof PhotoSchema>
