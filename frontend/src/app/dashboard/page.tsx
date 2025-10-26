'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import UserProfile from './_components/user-profile';
import RegisteredEvents from './_components/registered-events';

export default function DashboardPage() {

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Welcome to Your Dashboard</h1>
        <p className="text-muted-foreground">Here's an overview of your reunion details.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UserProfile />
        <RegisteredEvents />
      </div>
    </div>
  );
}
