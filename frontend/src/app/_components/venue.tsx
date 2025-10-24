import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, CalendarDays } from 'lucide-react';

export default function Venue() {
  const venueImage = PlaceHolderImages.find(p => p.id === 'venue-image');

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Event Venue</h2>
          <p className="text-lg text-muted-foreground mt-2">Where we'll be celebrating.</p>
        </div>

        <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[300px] md:min-h-[450px]">
              {venueImage && (
                <Image
                  src={venueImage.imageUrl}
                  alt={venueImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={venueImage.imageHint}
                />
              )}
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
              <h3 className="text-3xl font-bold font-headline mb-6">Ranir Bazar High School Campus</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-8 w-8 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-muted-foreground">Main School Field, Ranir Bazar, Agartala, Tripura West, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CalendarDays className="h-8 w-8 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">Date & Time</h4>
                    <p className="text-muted-foreground">Thursday, December 25, 2025</p>
                    <p className="text-muted-foreground">10:00 AM onwards</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                {/* A real map embed could go here */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Map will be available here.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
