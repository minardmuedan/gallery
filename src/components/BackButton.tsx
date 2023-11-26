"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { X } from "lucide-react"

export default function BackButton() {
  const router = useRouter()
  return (
    <div className="absolute top-2 left-2">
      <Button size="icon" onClick={() => router.back()}>
        <X />
      </Button>
    </div>
  )
}
