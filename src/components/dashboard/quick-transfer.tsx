import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Send } from "lucide-react";

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
];

export function QuickTransfer() {
  return (
    <Card className="border-none shadow-none bg-transparent space-y-6 p-0">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl font-semibold tracking-tight p-0">Quick Transfer</CardTitle>
      </CardHeader>
      <CardContent className="bg-white p-6 border rounded-3xl border-gray-200">
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {contacts.map((contact) => (
            <div key={contact.name} className="flex flex-col items-center min-w-[100px]">
              <Avatar className="h-12 w-12 mb-2">
                <AvatarImage src={contact.image} alt={contact.name} />
                <AvatarFallback className="bg-background">{contact.name[0]}</AvatarFallback>
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
        <div className="flex gap-3 items-center ">
          <span className="text-sm opacity-70 min-w-max">Write Amount</span>
          <div className="flex bg-background rounded-l-full">
            <Input className="  border-none m-0" type="number" placeholder="525.50" />
            <Button className="rounded-full">
              Send
              <Send className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
