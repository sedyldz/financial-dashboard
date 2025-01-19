import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Settings } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4 gap-4">
        {/* Mobile view */}
        <div className="flex md:hidden items-center w-full">
          <SidebarTrigger className="-ml-1" />
          <h2 className="text-lg font-semibold flex-1 text-center">Overview</h2>
          <Avatar>
            <AvatarImage src="/user.png" />
            <AvatarFallback>EC</AvatarFallback>
          </Avatar>
        </div>
        {/* Desktop view */}
        <div className="hidden md:flex items-center w-full">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Overview</h2>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-4">
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
      </div>
    </header>
  );
}
