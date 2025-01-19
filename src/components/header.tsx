import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Settings } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4 gap-4">
        <h2 className="text-lg font-semibold">Overview</h2>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for something..."
              className="w-[300px] pl-8 bg-background rounded-3xl border-none"
            />
          </div>
          <Button
            variant="default"
            size="default"
            className="bg-background text-light-gray-blue rounded-full h-10 w-10 p-0"
          >
            <Settings className="h-5 w-5 text-light-gray-blue" />
          </Button>
          <Button
            variant="default"
            size="default"
            className="bg-background text-light-gray-blue rounded-full h-10 w-10 p-0"
          >
            <Bell className="h-5 w-5 text-transaction-blue" />
          </Button>
          <Avatar>
            <AvatarImage src="/user.png" />
            <AvatarFallback>EC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
