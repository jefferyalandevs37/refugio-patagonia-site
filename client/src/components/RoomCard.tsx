import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Wifi, Coffee, Mountain } from "lucide-react";

interface RoomCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
  maxGuests: number;
  onViewDetails: () => void;
}

const amenityIcons: Record<string, any> = {
  wifi: Wifi,
  breakfast: Coffee,
  view: Mountain,
};

export default function RoomCard({ 
  name, 
  description, 
  price, 
  image, 
  amenities, 
  maxGuests,
  onViewDetails 
}: RoomCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-2xl font-semibold text-foreground">{name}</h3>
          <Badge variant="secondary" className="font-semibold">
            ${price}/night
          </Badge>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="gap-1">
            <Users className="h-3 w-3" />
            Up to {maxGuests} guests
          </Badge>
          {amenities.slice(0, 3).map((amenity) => {
            const Icon = amenityIcons[amenity.toLowerCase()] || Mountain;
            return (
              <Badge key={amenity} variant="outline" className="gap-1">
                <Icon className="h-3 w-3" />
                {amenity}
              </Badge>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={onViewDetails} 
          className="w-full"
          data-testid={`button-view-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
