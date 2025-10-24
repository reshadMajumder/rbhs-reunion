import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ticket, Star, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const pricingTiers = [
  {
    title: 'Vintage Alumni',
    batch: '1998 - 2000',
    price: 3000,
    features: ['Premium Souvenir Kit', 'Front Row Seating', 'Special Mention', 'All-Access Pass'],
    icon: <Star className="h-8 w-8 text-amber-400" />,
    isFeatured: true,
  },
  {
    title: 'Golden Era',
    batch: '2001 - 2015',
    price: 2000,
    features: ['Standard Souvenir', 'Access to all events', 'Gala Dinner', 'Photo Booth Access'],
    icon: <Shield className="h-8 w-8 text-primary" />,
    isFeatured: false,
  },
  {
    title: 'New Generation',
    batch: '2016 - 2025',
    price: 1000,
    features: ['Digital Souvenir', 'Access to main events', 'Gala Dinner', 'Networking Session'],
    icon: <Ticket className="h-8 w-8 text-accent" />,
    isFeatured: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Registration Tiers</h2>
          <p className="text-lg text-muted-foreground mt-2">Choose your pass to this unforgettable event.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={cn('flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-300', tier.isFeatured && 'border-accent border-2 -translate-y-4 shadow-purple-200')}>
              <CardHeader className="items-center text-center">
                <div className="mb-4">{tier.icon}</div>
                <CardTitle className="font-headline text-2xl">{tier.title}</CardTitle>
                <CardDescription className="text-sm">{tier.batch}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{tier.price}tk</span>
                  <span className="text-muted-foreground">/person</span>
                </div>
                <ul className="space-y-3 text-sm">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={cn("h-2 w-2 rounded-full", tier.isFeatured ? "bg-accent" : "bg-primary")}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={cn("w-full", tier.isFeatured ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90")}>
                  Register as {tier.title}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
