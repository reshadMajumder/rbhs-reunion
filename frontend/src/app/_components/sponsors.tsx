const sponsors = [
  { name: 'Creative Solutions', logo: 'CS' },
  { name: 'Tech Innovators', logo: 'TI' },
  { name: 'Global Ventures', logo: 'GV' },
  { name: 'Local Eats', logo: 'LE' },
  { name: 'Future Forward', logo: 'FF' },
  { name: 'Community Bank', logo: 'CB' },
];

export default function Sponsors() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Valued Sponsors</h2>
        <p className="text-lg text-muted-foreground mb-12">This event is made possible by their generous support.</p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-muted border-2 border-primary/20">
                <span className="font-bold text-primary text-xl">{sponsor.logo}</span>
              </div>
              <span className="font-bold text-lg text-muted-foreground">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
