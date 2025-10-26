import TicketCard from "./_components/ticket-card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ticketData = [
    {
        alumniName: 'Anisul Islam',
        ticketType: 'Vintage RBMBIAN' as const,
        guestCount: 2,
        childCount: 1,
        secretCode: 'RBMB-2026-VINTAGE-123',
        isDonator: true, // This will upgrade the ticket to Premium
    },
    {
        alumniName: 'Sumit Saha',
        ticketType: 'Golden Era' as const,
        guestCount: 1,
        childCount: 0,
        secretCode: 'RBMB-2026-GOLDEN-456',
        isDonator: false,
    },
    {
        alumniName: 'Suhag Al Amin',
        ticketType: 'New Generation' as const,
        guestCount: 0,
        childCount: 0,
        secretCode: 'RBMB-2026-NEWGEN-789',
        isDonator: false,
    },
    {
        alumniName: 'Jhankar Mahbub',
        ticketType: 'Golden Era' as const,
        guestCount: 1,
        childCount: 2,
        secretCode: 'RBMB-2026-GOLDEN-101',
        isDonator: true,
    }
];


export default function EventsPage() {
    // This page now shows multiple tickets for demonstration purposes.
    // In a real app, you would fetch and display the ticket for the logged-in user.
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">My Event Ticket</h1>
                <p className="text-muted-foreground">
                    Here are your tickets for the reunion. You can download them or show this screen at the event.
                </p>
            </div>

            <div className="space-y-12">
                {ticketData.map((ticket, index) => (
                    <div key={ticket.secretCode}>
                        <div className="flex justify-center">
                            <TicketCard {...ticket} />
                        </div>
                        <div className="text-center mt-6">
                            <Button>
                                <Download className="mr-2 h-5 w-5" />
                                Download Ticket
                            </Button>
                        </div>
                        {index < ticketData.length - 1 && <Separator className="mt-12" />}
                    </div>
                ))}
            </div>
      </div>
    )
}
