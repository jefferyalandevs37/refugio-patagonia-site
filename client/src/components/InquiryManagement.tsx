import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface Inquiry {
  id: string;
  source: 'whatsapp' | 'chat';
  name: string;
  message: string;
  status: 'new' | 'in-progress' | 'resolved';
  timestamp: Date;
}

const mockInquiries: Inquiry[] = [
  {
    id: '1',
    source: 'whatsapp',
    name: 'Carlos Rodriguez',
    message: 'Hi, I would like to know about availability for fly fishing packages in January.',
    status: 'new',
    timestamp: new Date('2024-11-07T10:30:00'),
  },
  {
    id: '2',
    source: 'chat',
    name: 'Emily Chen',
    message: 'What are the check-in and check-out times?',
    status: 'in-progress',
    timestamp: new Date('2024-11-07T09:15:00'),
  },
];

export default function InquiryManagement() {
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(mockInquiries[0]);
  const [replyText, setReplyText] = useState("");

  const handleSendReply = () => {
    console.log('Sending reply:', replyText);
    setReplyText("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Inquiries</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="all">
            <TabsList className="w-full rounded-none border-b">
              <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
              <TabsTrigger value="whatsapp" className="flex-1">
                <SiWhatsapp className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex-1">
                <MessageCircle className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
            <ScrollArea className="h-[480px]">
              {mockInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  onClick={() => setSelectedInquiry(inquiry)}
                  className={`p-4 border-b cursor-pointer hover-elevate ${
                    selectedInquiry?.id === inquiry.id ? 'bg-accent' : ''
                  }`}
                  data-testid={`inquiry-${inquiry.id}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {inquiry.source === 'whatsapp' ? (
                        <SiWhatsapp className="h-4 w-4 text-accent" />
                      ) : (
                        <MessageCircle className="h-4 w-4 text-primary" />
                      )}
                      <span className="font-medium">{inquiry.name}</span>
                    </div>
                    <Badge variant={inquiry.status === 'new' ? 'default' : 'secondary'}>
                      {inquiry.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {inquiry.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {inquiry.timestamp.toLocaleString()}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>
            {selectedInquiry ? selectedInquiry.name : 'Select an inquiry'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedInquiry ? (
            <div className="space-y-6">
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm">{selectedInquiry.message}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {selectedInquiry.timestamp.toLocaleString()}
                </p>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Quick Reply</label>
                <Textarea
                  placeholder="Type your response..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={6}
                  data-testid="textarea-inquiry-reply"
                />
                <div className="flex gap-2">
                  <Button onClick={handleSendReply} data-testid="button-send-reply">
                    <Send className="h-4 w-4 mr-2" />
                    Send Reply
                  </Button>
                  <Button variant="outline">Mark as Resolved</Button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-12">
              Select an inquiry to view and respond
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
