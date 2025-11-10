import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Search } from "lucide-react";

interface Booking {
  id: string;
  guestName: string;
  email: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  status: 'confirmed' | 'pending' | 'checked-in' | 'completed';
  guests: number;
}

const statusColors = {
  confirmed: 'default',
  pending: 'secondary',
  'checked-in': 'default',
  completed: 'outline',
} as const;

export default function BookingTable({ bookings }: { bookings: Booking[] }) {
  const [search, setSearch] = useState("");

  const filteredBookings = bookings.filter(booking =>
    booking.guestName.toLowerCase().includes(search.toLowerCase()) ||
    booking.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search bookings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
            data-testid="input-search-bookings"
          />
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Guest Name</TableHead>
              <TableHead>Room Type</TableHead>
              <TableHead>Check-in</TableHead>
              <TableHead>Check-out</TableHead>
              <TableHead>Guests</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id} className="hover-elevate">
                <TableCell className="font-medium">{booking.guestName}</TableCell>
                <TableCell>{booking.roomType}</TableCell>
                <TableCell>{booking.checkIn}</TableCell>
                <TableCell>{booking.checkOut}</TableCell>
                <TableCell>{booking.guests}</TableCell>
                <TableCell>
                  <Badge variant={statusColors[booking.status]}>
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    data-testid={`button-view-booking-${booking.id}`}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
