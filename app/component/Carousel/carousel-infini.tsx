"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"

export default function InfiniteCarousel() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const images = [
    "/img/TOO_restaurant_Panoramique_vue_Paris_nuit_v2-scaled.jpg",
    "/img/restauration.jpeg",
    "/img/TOO_restaurant_Thon-e1663853434771.jpg",
  ]

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000) 

    return () => clearInterval(interval)
  }, [api])

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  return (
    <div className="mx-auto w-[80%]">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="relative">
              <Card className="border-0 overflow-hidden">
                <div className="aspect-[16/9] w-full">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover "
                    priority={index === 0}
                  />
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
