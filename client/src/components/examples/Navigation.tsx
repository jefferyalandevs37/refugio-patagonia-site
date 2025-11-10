import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <Navigation 
      onBookNow={() => console.log('Book now clicked')}
      onContactClick={() => console.log('Contact clicked')}
    />
  );
}
