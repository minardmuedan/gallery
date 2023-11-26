"use client"

import { X } from "lucide-react"
import { useRouter } from "next/navigation"

type Props = {
  children: JSX.Element
}

export default function ModalWrapper({ children }: Props) {
  const router = useRouter()
  return (
    <div
      onClick={() => router.back()}
      className="absolute inset-0 z-50 bg-black/30 backdrop-blur-sm h-screen overflow-x-hidden overflow-y-auto pt-20"
    >
      <div
        className="relative lg:w-4/5 mx-auto bg-white rounded-xl p-2 pt-6 "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => router.back()}
          className="absolute top-2 right-2 w-fit"
        >
          <X />
        </button>

        {children}
      </div>
    </div>
  )
}
