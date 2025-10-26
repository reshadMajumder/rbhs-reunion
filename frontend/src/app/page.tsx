import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

import Loader from '@/components/loader';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MatrixRain from '@/components/matrix-rain';
import { ScrollWrapper } from '@/components/scroll-wrapper';

import Hero from './_components/hero';
import Notice from './_components/notice';
import Stats from './_components/stats';
import OurStory from './_components/our-story';
import Pricing from './_components/pricing';
import Instructions from './_components/instructions';
import PersonalizedContent from './_components/personalized-content';
import Venue from './_components/venue';
import Sponsors from './_components/sponsors';
import Donations from './_components/donations';
import GiftsOfMemory from './_components/gifts-of-memory';

export default function Home() {
  const parallaxImage = PlaceHolderImages.find(p => p.id === 'parallax-bg');

  return (
    <>
      <Loader />
      <div className="relative z-10 bg-background">
        <Header />
        <main>
          <Hero />
          <div className="relative bg-background/80">
            {parallaxImage && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={parallaxImage.imageUrl}
                  alt={parallaxImage.description}
                  fill
                  className="object-cover object-center"
                  data-ai-hint={parallaxImage.imageHint}
                />
                <div className="absolute inset-0 bg-background/80"></div>
              </div>
            )}
            <div className="relative z-10">
              <ScrollWrapper>
                <Notice />
              </ScrollWrapper>
              <ScrollWrapper>
                <Stats />
              </ScrollWrapper>
              <ScrollWrapper>
                <OurStory />
              </ScrollWrapper>
              <ScrollWrapper>
                <Pricing />
              </ScrollWrapper>
              <ScrollWrapper>
                <Instructions />
              </ScrollWrapper>
              <PersonalizedContent />
              <GiftsOfMemory />
              <ScrollWrapper>
                <Venue />
              </ScrollWrapper>
              <ScrollWrapper>
                <Donations />
              </ScrollWrapper>
              <ScrollWrapper>
                <Sponsors />
              </ScrollWrapper>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <MatrixRain />
    </>
  );
}
