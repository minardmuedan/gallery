import ModalWrapper from "@/components/ModalWrapper"
import { Loader2 } from "lucide-react"
import { Suspense } from "react"

type Props = {
  children: React.ReactNode
}

export default function PhotoModalLayout({ children }: Props) {
  const suspenseFallback = () => {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    )
  }
  return (
    <ModalWrapper>
      <Suspense fallback={suspenseFallback()}>{children}</Suspense>
    </ModalWrapper>
  )
}
