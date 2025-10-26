import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProfileForm from './_components/profile-form';
import UserProfile from '../_components/user-profile';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">My Profile</h1>
        <p className="text-muted-foreground">
          View and update your personal information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="flex flex-col items-center text-center p-4">
            <UserProfile />
            <Button variant="outline" className="mt-4">
              <Upload className="mr-2 h-4 w-4" />
              Change Photo
            </Button>
          </Card>
        </div>
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                <CardTitle>Profile Details</CardTitle>
                <CardDescription>
                    This information will be displayed on your public profile.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <ProfileForm />
                </CardContent>
            </Card>
        </div>
      </div>

    </div>
  );
}
