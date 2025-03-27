import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface PartnerLogoProps {
  src: string
  alt: string
}

export default function PartnerLogo({ src, alt }: PartnerLogoProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex items-center justify-center">
        <div className="relative h-24 w-full">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      </CardContent>
    </Card>
  )
}

