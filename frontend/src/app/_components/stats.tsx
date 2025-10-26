'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, User, Heart, Plus } from 'lucide-react';

const totalRegistered = 482;
const totalCapacity = 1000;
const maleCount = 289;
const femaleCount = 193;

const currentYear = new Date().getFullYear();
const batchData = Array.from({ length: currentYear - 1989 + 1 }, (_, i) => {
    const year = 1989 + i;
    return {
        name: `${year}`,
        count: Math.floor(Math.random() * 50) + 10, // Random registration count
    };
}).reverse(); // Show most recent years first

const INITIAL_VISIBLE_COUNT = 12;

export default function Stats() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const showMore = () => {
    setVisibleCount(batchData.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Registration at a Glance</h2>
          <p className="text-lg text-muted-foreground mt-2">See who's coming to our grand reunion!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3">
                <Users className="text-accent" />
                <span>Total Registered</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold text-accent">{totalRegistered}<span className="text-3xl text-muted-foreground">/{totalCapacity}</span></p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3">
                <User className="text-primary" />
                <span>Male RBMBIANs</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold text-primary">{maleCount}</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3">
                <Heart className="text-pink-500" />
                <span>Female RBMBIANs</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold text-pink-500">{femaleCount}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-headline">Batch-wise Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {batchData.slice(0, visibleCount).map((batch) => (
                <Card key={batch.name} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-headline">{batch.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-3xl font-bold text-primary">{batch.count}</p>
                    <p className="text-sm text-muted-foreground">Registered</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
          {visibleCount < batchData.length && (
            <CardFooter className="justify-center">
              <Button onClick={showMore} variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Load More
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
