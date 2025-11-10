import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onBookNow: () => void;
  onExploreRooms: () => void;
}

export default function Hero({ onBookNow, onExploreRooms }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/stock_images/patagonia_mountains__2dc78495.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-5xl font-semibold text-white md:text-6xl lg:text-7xl mb-6">
          Refugio Rio Cisnes Patagonia
        </h1>
        <p className="max-w-2xl text-lg text-white/90 md:text-xl mb-12">
          Where luxury meets wilderness. Experience world-class fly fishing and breathtaking adventures in the heart of Chilean Patagonia.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button 
            size="lg"
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
            onClick={onBookNow}
            data-testid="button-book-now"
          >
            Book Your Stay
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20"
            onClick={onExploreRooms}
            data-testid="button-explore-rooms"
          >
            Explore Rooms
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
}
