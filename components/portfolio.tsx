"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const categories = ["All", "Photography", "3D Render"]

const portfolioItems = [
  { id: 1, category: "Photography", title: "Blue Hour", image: "/blues.jpg?height=1920&width=1080" },
  { id: 2, category: "Photography", title: "Apartments", image: "/apartments.jpg?height=1920&width=1080" },
  { id: 3, category: "Photography", title: "1000 Trees", image: "/1000 trees.jpg?height=1920&width=1080" },
  { id: 4, category: "Photography", title: "Vendor", image: "/fastfood.jpg?height=1920&width=1080" },
  { id: 5, category: "Photography", title: "Hajima Sorayama", image: "/hajima.jpg?height=1920&width=1080" },
  { id: 6, category: "Photography", title: "Spiral", image: "/spiral.jpg?height=1920&width=1080" },
  { id: 7, category: "Photography", title: "Vase", image: "/john.jpg?height=1920&width=1080" },
  { id: 8, category: "Photography", title: "Temple", image: "/temple.jpg?height=1920&width=1080" },
  { id: 9, category: "3D Render", title: "Deer Stone", image: "/render3.png?height=1920&width=1080" },
  { id: 10, category: "3D Render", title: "Interstellar", image: "/thumbnail.png", type: "video", videoSrc: "/interstellar.mp4" },
  { id: 11, category: "Photography", title: "Shanghai", image: "/hero background.jpg?height=1920&width=1080" },
  { id: 12, category: "3D Render", title: "Pulsing Animation", image: "/thumbnail3.png", type: "youtube", videoId: "ebvcEJABtJ8" },
  { id: 13, category: "3D Render", title: "Streamline", image: "/streamline.png", type: "youtube", videoId: "x-hRpz-Rmrs" },
  { id: 14, category: "Photography", title: "Beacons", image: "/beacons.jpg?height=1920&width=1080" }
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my favorite visuals I created
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-transparent border border-input hover:bg-accent hover:text-accent-foreground'}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-center">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="relative aspect-[16/9] w-full">
                  {item.type === "video" ? (
                    <video
                      src={item.videoSrc}
                      controls
                      autoPlay
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : item.type === "youtube" ? (
                    <iframe 
                      src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    />
                  ) : (
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
