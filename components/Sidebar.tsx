import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Box, Calendar, Home, Inbox, Search, Settings, Upload } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
const { getUser } = getKindeServerSession()

export async function AppSidebar() {
    const user = await getUser()
    const items = [
        {
            title: "Home",
            url: "/",
            icon: Home,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
        {
            title: "Your items",
            url: `/items/${user?.id}`,
            icon: Box
        }, {
            title: "Upload item",
            url: "/upload",
            icon: Upload
        }
    ]
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-y-4">
                            <SidebarMenuItem>
                                <div className="flex items-center gap-2">
                                    <Search />
                                    <span><Input placeholder="Search" /></span>
                                </div>
                            </SidebarMenuItem>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
