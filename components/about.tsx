import { Card, CardContent } from "@/components/ui/card"
import { Camera, Award, Users, Heart } from "lucide-react"
import Image from "next/image"

export function About() {
  const stats = [
    { icon: Camera, label: "Photos Taken", value: "1000+" },
    { icon: Users, label: "Took photos of", value: "100+" },
    { icon: Heart, label: "Years of Exp", value: "2+" },
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                I'm Avidikhuu Altangerel, a novice visualist based in Shanghai/Ulaanbaatar. I study Applied Math & CS at Duke Kunshan University.
                My passion lies in complimenting visuals through technology
              </p>
              <p>
                My art journey began with Blender in 2022. I started doing 3D modelling and animations from tutorials. After a year, I
                became freelancer, working for individuals and organisations. Biggest work I did was creating a NFT collection for Singaporean
                Startup.
              </p>
              <p>
                I started doing Photography this year, shooting for @thehumansofdku and @dkuathletics. I focus on capturing
                the mood of the moment through my photography, rather than imitating reality.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/vida.jpg?height=800&width=600"
                alt="Alex Chen - Photographer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
