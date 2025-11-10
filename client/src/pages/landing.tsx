import { useState, useRef } from "react";
import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import RoomCard from "@/components/RoomCard";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const rooms = [
  {
    id: '1',
    name: 'Mountain View Suite',
    description: 'Spacious suite with panoramic mountain views, king-size bed, and modern amenities. Perfect for couples seeking luxury and comfort.',
    price: 350,
    image: '/assets/stock_images/patagonia_mountains__8cf9801d.jpg',
    amenities: ['WiFi', 'Breakfast', 'View'],
    maxGuests: 2,
  },
  {
    id: '2',
    name: 'Riverside Premium',
    description: 'Elegant riverside accommodation with private balcony, featuring stunning river views and premium furnishings for an unforgettable stay.',
    price: 400,
    image: '/assets/stock_images/patagonia_river_flow_96ae6901.jpg',
    amenities: ['WiFi', 'Breakfast', 'View'],
    maxGuests: 3,
  },
  {
    id: '3',
    name: 'Forest Cabin',
    description: 'Cozy cabin nestled in the forest with rustic charm and modern comfort. Ideal for those seeking a peaceful retreat.',
    price: 280,
    image: '/assets/stock_images/snow_capped_mountain_cf61526f.jpg',
    amenities: ['WiFi', 'Breakfast'],
    maxGuests: 2,
  },
];

export default function Landing() {
  const [, setLocation] = useLocation();
  const chatbotRef = useRef<{ openChat: () => void }>(null);

  const handleBookNow = () => {
    setLocation('/booking');
  };

  const handleExploreRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    const chatButton = document.querySelector('[data-testid="button-open-chat"]') as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onBookNow={handleBookNow} onContactClick={handleContactClick} />
      <Hero onBookNow={handleBookNow} onExploreRooms={handleExploreRooms} />
      
      <section id="rooms" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
              Luxury Accommodations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our carefully curated selection of rooms and suites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                {...room}
                onViewDetails={() => setLocation('/booking')}
              />
            ))}
          </div>
        </div>
      </section>

      <Amenities />
      <Gallery />
      <Footer onContactClick={handleContactClick} />
      <Chatbot />
    </div>
  );
}
