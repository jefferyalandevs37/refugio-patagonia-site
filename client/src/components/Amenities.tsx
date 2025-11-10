import { Card, CardContent } from "@/components/ui/card";
import { Fish, Mountain, UtensilsCrossed, Waves, Wifi, Dumbbell } from "lucide-react";

const amenities = [
  {
    icon: Fish,
    title: "Fly Fishing",
    description: "World-class fly fishing on pristine Patagonian rivers"
  },
  {
    icon: Mountain,
    title: "Hiking & Trekking",
    description: "Guided trails through breathtaking mountain landscapes"
  },
  {
    icon: UtensilsCrossed,
    title: "Gourmet Dining",
    description: "Farm-to-table cuisine featuring local Patagonian flavors"
  },
  {
    icon: Waves,
    title: "Spa & Wellness",
    description: "Relax and rejuvenate with mountain-view treatments"
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected even in the wilderness"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Maintain your routine with modern equipment"
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
            World-Class Amenities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for an unforgettable Patagonian adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{amenity.title}</h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
