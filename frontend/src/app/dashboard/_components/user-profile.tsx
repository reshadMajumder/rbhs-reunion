'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Dummy user data
const user = {
  name: 'Anisul Islam',
  email: 'user@example.com',
  batch: '2002',
  avatarUrl: 'https://picsum.photos/seed/user-avatar/200/200',
  avatarFallback: 'AI',
};

export default function UserProfile() {
  return (
    <Card className="shadow-lg h-full">
      <CardHeader className="items-center text-center">
        <Avatar className="h-24 w-24 mb-4 border-4 border-primary">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.avatarFallback}</AvatarFallback>
        </Avatar>
        <CardTitle className="font-headline text-2xl">{user.name}</CardTitle>
        <CardDescription>Batch of {user.batch}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </CardContent>
    </Card>
  );
}
