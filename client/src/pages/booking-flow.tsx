import { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Check, Users } from "lucide-react";
import { format } from "date-fns";

const rooms = [
  {
    id: '1',
    name: 'Mountain View Suite',
    price: 350,
    image: '/assets/stock_images/patagonia_mountains__8cf9801d.jpg',
    maxGuests: 2,
  },
  {
    id: '2',
    name: 'Riverside Premium',
    price: 400,
    image: '/assets/stock_images/patagonia_river_flow_96ae6901.jpg',
    maxGuests: 3,
  },
  {
    id: '3',
    name: 'Forest Cabin',
    price: 280,
    image: '/assets/stock_images/snow_capped_mountain_cf61526f.jpg',
    maxGuests: 2,
  },
];

export default function BookingFlow() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    specialRequests: '',
  });

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoom(roomId);
    setStep(2);
  };

  const handleGuestDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleConfirmBooking = () => {
    setStep(4);
  };

  const selectedRoomData = rooms.find(r => r.id === selectedRoom);

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => setLocation('/')}
            data-testid="button-back-home"
          >
            ← Back to Home
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step > s ? <Check className="h-5 w-5" /> : s}
                </div>
                {s < 4 && <div className={`w-16 h-1 ${step > s ? 'bg-primary' : 'bg-muted'}`} />}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-16 mt-4">
            <span className="text-sm">Select Room</span>
            <span className="text-sm">Dates & Guests</span>
            <span className="text-sm">Details</span>
            <span className="text-sm">Confirm</span>
          </div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Select Your Room</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className="border rounded-lg overflow-hidden hover-elevate cursor-pointer"
                    onClick={() => handleRoomSelect(room.id)}
                    data-testid={`room-option-${room.id}`}
                  >
                    <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{room.name}</h3>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">${room.price}/night</Badge>
                        <Badge variant="outline" className="gap-1">
                          <Users className="h-3 w-3" />
                          {room.maxGuests}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && selectedRoomData && (
          <Card>
            <CardHeader>
              <CardTitle>Select Dates & Number of Guests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <img src={selectedRoomData.image} alt={selectedRoomData.name} className="w-24 h-24 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{selectedRoomData.name}</h3>
                  <p className="text-sm text-muted-foreground">${selectedRoomData.price} per night</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Check-in Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start" data-testid="button-checkin-date">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Check-out Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start" data-testid="button-checkout-date">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Number of Guests</Label>
                <Input
                  type="number"
                  min={1}
                  max={selectedRoomData.maxGuests}
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  data-testid="input-guests"
                />
              </div>

              <Button 
                onClick={() => setStep(3)} 
                disabled={!checkIn || !checkOut}
                className="w-full"
                data-testid="button-continue-details"
              >
                Continue to Guest Details
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Guest Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGuestDetails} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-guest-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="input-guest-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    data-testid="input-guest-phone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requests">Special Requests (Optional)</Label>
                  <Textarea
                    id="requests"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    rows={4}
                    data-testid="textarea-special-requests"
                  />
                </div>

                <Button type="submit" className="w-full" data-testid="button-review-booking">
                  Review Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 4 && selectedRoomData && (
          <Card>
            <CardHeader>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                  <Check className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted p-6 rounded-lg space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Room</p>
                  <p className="font-semibold">{selectedRoomData.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Check-in</p>
                    <p className="font-semibold">{checkIn ? format(checkIn, "PPP") : 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Check-out</p>
                    <p className="font-semibold">{checkOut ? format(checkOut, "PPP") : 'N/A'}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Guest Name</p>
                  <p className="font-semibold">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">{formData.email}</p>
                </div>
              </div>

              <p className="text-center text-muted-foreground">
                A confirmation email has been sent to {formData.email}
              </p>

              <Button onClick={() => setLocation('/')} className="w-full" data-testid="button-return-home">
                Return to Home
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
