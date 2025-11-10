import BookingTable from '../BookingTable';

export default function BookingTableExample() {
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
      roomType: 'Riverside Cabin',
      checkIn: '2024-12-18',
      checkOut: '2024-12-22',
      status: 'pending' as const,
      guests: 3,
    },
  ];

  return (
    <div className="p-8">
      <BookingTable bookings={mockBookings} />
    </div>
  );
}
