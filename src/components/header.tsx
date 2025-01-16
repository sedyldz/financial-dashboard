import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search, Settings } from "lucide-react"

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 gap-4">
        <h2 className="text-lg font-semibold">Overview</h2>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for something..."
              className="w-[300px] pl-8"
            />
          </div>
          <Button variant="ghost" size="default">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="default">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="/avatars/user.png" />
            <AvatarFallback>EC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}