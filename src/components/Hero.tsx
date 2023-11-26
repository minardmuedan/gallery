import Image from "next/image"
import HeroImage from "../../public/hero_image.png"

export default function Hero() {
  return (
    <div className="h-[calc(100vh-3rem)] w-full flex items-center justify-between px-10 overflow-hidden">
      <div className="">
        <h1 className="text-3xl lg:text-7xl  whitespace-nowrap">
          A Canvas Where <br /> Each Image Has <br /> Its Voice
        </h1>
        <h3 className="text-sm md:text-2xl">
          Where Every Image Tells a Different Story
        </h3>
      </div>

      <div className="border h-full  flex items-center bg-accent">
        <Image
          src={HeroImage}
          height={500}
          width={400}
          alt="broken hero image h-full"
        />
      </div>
    </div>
  )
}
