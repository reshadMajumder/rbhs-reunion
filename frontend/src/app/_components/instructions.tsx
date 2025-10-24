import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export default function Instructions() {
  const videoThumb = PlaceHolderImages.find(p => p.id === 'instruction-video-thumb');

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline">How to Register</h2>
          <p className="text-lg text-muted-foreground mt-2">Follow our simple video guide to secure your spot.</p>
        </div>

        <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="p-4">
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative group">
              {videoThumb && (
                <Image
                  src={videoThumb.imageUrl}
                  alt={videoThumb.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={videoThumb.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button aria-label="Play video">
                  <PlayCircle className="h-24 w-24 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </button>
              </div>
            </div>
            {/* In a real application, clicking the button would open a modal with the video iframe */}
            {/* <iframe src="https://www.youtube.com/embed/..." /> */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
