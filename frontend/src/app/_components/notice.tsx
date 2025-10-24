import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Megaphone, FileText } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: 'Final Registration Deadline Extended!',
    date: '2025-11-30',
    summary: 'The final date for registration has been extended to November 30th, 2025. Make sure to secure your spot before the new deadline.',
  },
  {
    id: 2,
    title: 'Gala Dinner Menu Preview',
    date: '2025-11-15',
    summary: 'Get a sneak peek of the delicious menu planned for the reunion gala dinner. We will be accommodating all dietary restrictions.',
  },
  {
    id: 3,
    title: 'Volunteer Call for Event Day',
    date: '2025-11-05',
    summary: 'We are looking for enthusiastic volunteers to help us on the event day. Interested alumni can sign up now.',
  },
];

export default function Notice() {
  return (
    <section className="py-20 bg-background/80">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline flex items-center justify-center gap-4">
            <Megaphone className="h-10 w-10 text-accent" />
            Notice Board
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Latest news and updates about the grand reunion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notices.map((notice) => (
            <Card key={notice.id} className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{notice.title}</CardTitle>
                <p className="text-sm text-muted-foreground pt-1">Posted on: {new Date(notice.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{notice.summary}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
