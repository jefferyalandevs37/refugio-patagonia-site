import RoomCard from '../RoomCard';

export default function RoomCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <RoomCard
        name="Mountain View Suite"
        description="Spacious suite with panoramic mountain views, king-size bed, and modern amenities. Perfect for couples seeking luxury and comfort."
        price={350}
        image="/assets/stock_images/patagonia_mountains__8cf9801d.jpg"
        amenities={["WiFi", "Breakfast", "View"]}
        maxGuests={2}
        onViewDetails={() => console.log('View details clicked')}
      />
    </div>
  );
}
