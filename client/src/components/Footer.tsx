import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FooterProps {
  onContactClick?: () => void;
}

export default function Footer({ onContactClick }: FooterProps = {}) {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6">Refugio Rio Cisnes</h3>
            <p className="text-primary-foreground/80 mb-6">
              Your gateway to unforgettable Patagonian adventures and luxury accommodations.
            </p>
            <div className="flex gap-4">
              <button className="hover-elevate p-2 rounded-md" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="hover-elevate p-2 rounded-md" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#rooms" className="text-primary-foreground/80 hover:text-primary-foreground">Rooms</a></li>
              <li><a href="#amenities" className="text-primary-foreground/80 hover:text-primary-foreground">Amenities</a></li>
              <li><a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground">Gallery</a></li>
              <li><a href="/manager" className="text-primary-foreground/80 hover:text-primary-foreground">Manager Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Rio Cisnes, Aysén Region, Chile</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+56 9 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@refugioriocisnes.com</span>
              </li>
            </ul>
            <Button 
              variant="secondary"
              className="w-full mt-6 gap-2"
              onClick={onContactClick}
              data-testid="button-sanctuary-assistant"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with Sanctuary Assistant
            </Button>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                data-testid="input-newsletter-email"
              />
              <Button 
                variant="secondary"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 Refugio Rio Cisnes Patagonia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
