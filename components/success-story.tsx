import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SuccessStoryProps {
  title: string
  content: string
}

export default function SuccessStory({ title, content }: SuccessStoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  )
}

