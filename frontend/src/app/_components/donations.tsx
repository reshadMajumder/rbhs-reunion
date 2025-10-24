'use client';

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const donations = [
    { name: 'Anisul Islam', batch: '2002', amount: 10000, isFeatured: true },
    { name: 'Jankar Mahbub', batch: '2000', amount: 7500, isFeatured: false },
    { name: 'Sumit Saha', batch: '2005', amount: 5000, isFeatured: false },
    { name: 'Jhankar Mahbub', batch: '2001', amount: 8000, isFeatured: false },
    { name: 'Hasin Hayder', batch: '1999', amount: 12000, isFeatured: true },
    { name: 'Rasel Ahmed', batch: '2003', amount: 4000, isFeatured: false },
    { name: 'HM Nayeem', batch: '2010', amount: 6000, isFeatured: false },
    { name: 'Mizanur Rahman', batch: '2008', amount: 7000, isFeatured: false },
    { name: 'Suhag Al Amin', batch: '2012', amount: 3000, isFeatured: false },
    { name: 'Andrean Chowdhury', batch: '2015', amount: 9000, isFeatured: false },
    { name: 'Fayez Ahmed', batch: '2006', amount: 5500, isFeatured: false },
    { name: 'Rakibalom', batch: '2009', amount: 4500, isFeatured: false },
    { name: 'Shorif uddin', batch: '2011', amount: 6500, isFeatured: false },
    { name: 'Mezbaul Abedin', batch: '2004', amount: 8500, isFeatured: false },
    { name: 'Mir Hussain', batch: '2007', amount: 9500, isFeatured: false },
    { name: 'Ashraful Islam', batch: '2013', amount: 3500, isFeatured: false },
];

export default function Donations() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section className="py-20 bg-background/80">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline flex items-center justify-center gap-4">
            <Handshake className="h-10 w-10 text-accent" />
            Alumni Contributions
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Generous donations from our alumni are making this event possible.
          </p>
        </div>
        
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {donations.map((donation, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                 <div className="p-1 h-full">
                    <Card className={cn("flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 h-full", donation.isFeatured && "border-accent border-2 shadow-purple-200")}>
                        <CardHeader className="items-center text-center relative pt-4 pb-2">
                        {donation.isFeatured && <div className="absolute top-0 right-0 p-2 text-white bg-accent rounded-bl-lg rounded-tr-lg"><Heart className="h-5 w-5"/></div>}
                        <CardTitle className="font-headline text-xl pt-4">{donation.name}</CardTitle>
                        <CardDescription className="text-sm">Batch of {donation.batch}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow text-center flex flex-col justify-center items-center p-4">
                        <p className="text-3xl font-bold text-primary">{donation.amount.toLocaleString()}tk</p>
                        <p className="text-sm text-muted-foreground">Donated</p>
                        </CardContent>
                    </Card>
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="mr-2 h-5 w-5" />
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
}
