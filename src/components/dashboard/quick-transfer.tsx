import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"

const contacts = [
  {
    name: "Livia Bator",
    role: "CEO",
    image: "/avatars/livia.jpg",
  },
  {
    name: "Randy Press",
    role: "Director",
    image: "/avatars/randy.jpg",
  },
  {
    name: "Workman",
    role: "Designer",
    image: "/avatars/workman.jpg",
  },
]

export function QuickTransfer() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Transfer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="flex flex-col items-center min-w-[100px]"
            >
              <Avatar className="h-12 w-12 mb-2">
                <AvatarImage src={contact.image} alt={contact.name} />
                <AvatarFallback>{contact.name[0]}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-sm font-medium">{contact.name}</p>
                <p className="text-xs text-muted-foreground">{contact.role}</p>
              </div>
            </div>
          ))}
          <Button variant="outline" size="sm" className="h-12 w-12 rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Input type="number" placeholder="Enter amount" />
          <Button>Send</Button>
        </div>
      </CardContent>
    </Card>
  )
}