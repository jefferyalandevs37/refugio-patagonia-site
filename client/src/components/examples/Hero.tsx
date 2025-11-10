import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      onBookNow={() => console.log('Book now clicked')}
      onExploreRooms={() => console.log('Explore rooms clicked')}
    />
  );
}
