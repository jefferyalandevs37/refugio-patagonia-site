import { useState } from "react";
import { useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  MessageSquare, 
  Settings,
  CalendarCheck,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import StatsCard from "@/components/StatsCard";
import BookingCalendar from "@/components/BookingCalendar";
import BookingTable from "@/components/BookingTable";
import InquiryManagement from "@/components/InquiryManagement";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, id: "dashboard" },
  { title: "Bookings", icon: Calendar, id: "bookings" },
  { title: "Travelers", icon: Users, id: "travelers" },
  { title: "Inquiries", icon: MessageSquare, id: "inquiries" },
  { title: "Settings", icon: Settings, id: "settings" },
];

const mockBookings = [
  {
    id: '1',
    guestName: 'John Anderson',
    email: 'john@example.com',
    roomType: 'Mountain View Suite',
    checkIn: '2024-12-15',
    checkOut: '2024-12-20',
    status: 'confirmed' as const,
    guests: 2,
  },
  {
    id: '2',
    guestName: 'Sarah Martinez',
    email: 'sarah@example.com',
    roomType: 'Riverside Premium',
    checkIn: '2024-12-18',
    checkOut: '2024-12-22',
    status: 'pending' as const,
    guests: 3,
  },
  {
    id: '3',
    guestName: 'Michael Chen',
    email: 'michael@example.com',
    roomType: 'Forest Cabin',
    checkIn: '2024-12-10',
    checkOut: '2024-12-12',
    status: 'checked-in' as const,
    guests: 2,
  },
  {
    id: '4',
    guestName: 'Emma Wilson',
    email: 'emma@example.com',
    roomType: 'Mountain View Suite',
    checkIn: '2024-12-01',
    checkOut: '2024-12-05',
    status: 'completed' as const,
    guests: 2,
  },
];

export default function Dashboard() {
  const [activeView, setActiveView] = useState("dashboard");
  const [, setLocation] = useLocation();

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="font-serif text-lg font-semibold text-primary px-4 py-6">
                Refugio Manager
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => setActiveView(item.id)}
                        isActive={activeView === item.id}
                        data-testid={`nav-${item.id}`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup className="mt-auto">
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => setLocation('/')}>
                      Back to Website
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-4">
              <SidebarTrigger data-testid="button-sidebar-toggle" />
              <h1 className="text-2xl font-semibold">
                {menuItems.find(item => item.id === activeView)?.title}
              </h1>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6">
            {activeView === "dashboard" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatsCard
                    title="Total Bookings"
                    value={127}
                    icon={Calendar}
                    description="+12% from last month"
                  />
                  <StatsCard
                    title="Current Guests"
                    value={8}
                    icon={Users}
                    description="Checked in today"
                  />
                  <StatsCard
                    title="Revenue (MTD)"
                    value="$24,500"
                    icon={DollarSign}
                    description="+8% from last month"
                  />
                  <StatsCard
                    title="Occupancy Rate"
                    value="78%"
                    icon={TrendingUp}
                    description="+5% from last week"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <BookingCalendar />
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockBookings.slice(0, 5).map((booking) => (
                          <div key={booking.id} className="flex items-center justify-between p-3 rounded-lg hover-elevate">
                            <div>
                              <p className="font-medium">{booking.guestName}</p>
                              <p className="text-sm text-muted-foreground">{booking.roomType}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">{booking.checkIn}</p>
                              <p className="text-xs text-muted-foreground">{booking.guests} guests</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeView === "bookings" && (
              <div className="space-y-6">
                <BookingCalendar />
                <Card>
                  <CardHeader>
                    <CardTitle>All Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BookingTable bookings={mockBookings} />
                  </CardContent>
                </Card>
              </div>
            )}

            {activeView === "travelers" && (
              <Card>
                <CardHeader>
                  <CardTitle>Traveler Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <BookingTable bookings={mockBookings} />
                </CardContent>
              </Card>
            )}

            {activeView === "inquiries" && <InquiryManagement />}

            {activeView === "settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Settings configuration coming soon...</p>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
