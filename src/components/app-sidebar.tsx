"use client";

// Remove the Lucide import and add custom SVG import
import {
  HomeIcon,
  TransferIcon,
  AccountIcon,
  SettingsIcon,
  LoanIcon,
  PrivilegeIcon,
  InvestmentIcon,
  CreditCardIcon,
  ServicesIcon,
  LogoIcon,
} from "@/components/icons";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Transactions",
    url: "#",
    icon: TransferIcon,
  },
  {
    title: "Accounts",
    url: "#",
    icon: AccountIcon,
  },
  {
    title: "Investments",
    url: "#",
    icon: InvestmentIcon,
  },
  {
    title: "Credit Cards",
    url: "#",
    icon: CreditCardIcon,
  },
  {
    title: "Loans",
    url: "#",
    icon: LoanIcon,
  },
  {
    title: "Services",
    url: "#",
    icon: ServicesIcon,
  },
  {
    title: "My Privileges",
    url: "#",
    icon: PrivilegeIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: SettingsIcon,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent className="px-0">
        <div className="flex px-2 py-6">
          <LogoIcon />
        </div>
        <SidebarGroup className="px-0">
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-4 ">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={
                    item.url === pathname
                      ? "before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary before:rounded-tr-md before:rounded-br-md relative"
                      : ""
                  }
                >
                  <SidebarMenuButton
                    className="flex items-center gap-5 text-base px-6 py-4"
                    asChild
                  >
                    <a
                      className={item.url !== pathname ? "text-muted-foreground" : ""}
                      href={item.url}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
