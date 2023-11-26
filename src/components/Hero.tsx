import Image from "next/image"
import HeroImage from "../../public/hero_image.png"

export default function Hero() {
  return (
    <div className="h-[calc(100vh-3rem)] w-full flex flex-col md:flex-row items-center justify-center gap-10 overflow-hidden">
      <div className="z-10 text-center">
        <h1 className="text-3xl lg:text-7xl  whitespace-nowrap">
          A Canvas Where <br /> Each Image Has <br /> Its Voice
        </h1>
        <h3 className="text-xs md:text-2xl">
          Where Every Image Tells a Different Story
        </h3>
      </div>

      <div className="border flex items-center bg-accent">
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
