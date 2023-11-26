"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Search } from "lucide-react"

import { useRouter } from "next/navigation"

export default function SearchButton() {
  const router = useRouter()

  const SearchPhoto = (e: any) => {
    e.preventDefault()
    const searchKeyWord = e.target[0].value
    router.push(`/s/${searchKeyWord}`)
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Search />
      </DialogTrigger>
      <DialogContent className="top-1/4">
        <DialogHeader>
          <DialogTitle>Search for different image</DialogTitle>
          <div>
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => SearchPhoto(e)}
            >
              <Input type="text" placeholder="Search" />
              <Button type="submit">Search</Button>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
