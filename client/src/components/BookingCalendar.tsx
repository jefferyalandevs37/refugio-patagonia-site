import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarBooking {
  date: string;
  status: 'available' | 'booked' | 'checked-in';
}

export default function BookingCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);

  const mockBookings: Record<number, 'booked' | 'checked-in'> = {
    15: 'booked',
    16: 'booked',
    18: 'checked-in',
    20: 'booked',
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Booking Calendar</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={prevMonth} data-testid="button-prev-month">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium w-32 text-center">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <Button variant="outline" size="icon" onClick={nextMonth} data-testid="button-next-month">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2 text-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-sm font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}
          
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const status = mockBookings[day];
            return (
              <button
                key={day}
                className={`aspect-square flex items-center justify-center rounded-md text-sm hover-elevate ${
                  status === 'booked' ? 'bg-secondary text-secondary-foreground' :
                  status === 'checked-in' ? 'bg-accent text-accent-foreground' :
                  'hover:bg-muted'
                }`}
                data-testid={`calendar-day-${day}`}
              >
                {day}
              </button>
            );
          })}
        </div>
        
        <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-secondary" />
            <span className="text-sm">Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-accent" />
            <span className="text-sm">Checked-in</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border" />
            <span className="text-sm">Available</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
