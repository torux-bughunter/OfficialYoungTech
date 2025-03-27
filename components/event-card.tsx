"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface EventCardProps {
  title: string
  date: string
  location: string
  description: string
}

export default function EventCard({ title, date, location, description }: EventCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Learn More</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                <div className="flex items-center text-muted-foreground mb-2 mt-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{location}</span>
                </div>
              </DialogDescription>
            </DialogHeader>
            <p>{description}</p>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

