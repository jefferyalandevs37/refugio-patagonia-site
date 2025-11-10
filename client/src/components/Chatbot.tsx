import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SiWhatsapp } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Sanctuary Assistant, your AI-powered concierge for Refugio Rio Cisnes Patagonia. I can help you with:\n\n✓ Room availability & bookings\n✓ Check-in & check-out assistance\n✓ Activity recommendations\n✓ Dining reservations\n✓ WhatsApp integration for instant responses\n\nHow may I assist you today?",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = () => {
    if (!inputMessage.trim()) return;
    
    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };
    
    setMessages([...messages, newMessage]);
    setInputMessage("");
    
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "I'm processing your request with AI-powered assistance. For instant responses via WhatsApp, scan the QR code or click 'Connect WhatsApp' below. You can also reach our team directly at +56 9 1234 5678.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {!isOpen && showWelcome && (
        <div className="fixed bottom-24 right-6 max-w-sm bg-card border shadow-lg rounded-lg p-4 z-50 animate-in slide-in-from-bottom">
          <button
            onClick={() => setShowWelcome(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Meet Sanctuary Assistant</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Your AI-powered concierge for bookings, check-in/out, and instant WhatsApp support!
              </p>
              <Button 
                size="sm" 
                onClick={() => {
                  setIsOpen(true);
                  setShowWelcome(false);
                }}
              >
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-gradient-to-br from-primary to-accent"
          onClick={() => setIsOpen(true)}
          data-testid="button-open-chat"
        >
          <Sparkles className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary to-accent">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-primary-foreground">Sanctuary Assistant</h3>
                  <Badge variant="secondary" className="text-xs">AI-Powered</Badge>
                </div>
                <p className="text-xs text-primary-foreground/80">24/7 Instant Support</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-white/20"
              data-testid="button-close-chat"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot
                        ? 'bg-muted text-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t space-y-3">
            <Button 
              variant="outline" 
              className="w-full gap-2"
              onClick={() => console.log('Connect WhatsApp')}
              data-testid="button-connect-whatsapp"
            >
              <SiWhatsapp className="h-4 w-4" />
              Chat with our Sanctuary Assistant
            </Button>
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                data-testid="input-chat-message"
              />
              <Button onClick={handleSend} data-testid="button-send-message">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
