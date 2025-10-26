'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';
import Link from 'next/link';

const event = {
  name: 'RBMB Grand Reunion 2026',
  date: 'December 25, 2025',
  tier: 'Vintage RBMBIAN',
  paymentStatus: 'Paid',
};

export default function RegisteredEvents() {
  return (
    <Card className="shadow-lg h-full">
      <CardHeader>
        <CardTitle>My Registration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center p-4 border rounded-lg">
          <div>
            <h3 className="font-bold text-lg">{event.name}</h3>
            <p className="text-sm text-muted-foreground">{event.date}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{event.tier}</p>
            <p className="text-sm text-green-600 font-bold">{event.paymentStatus}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href="/dashboard/events">
            <Ticket className="mr-2 h-4 w-4" />
            View Ticket
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
