export default function Gallery() {
  const images = [
    { src: '/assets/stock_images/patagonia_mountains__b0ff984f.jpg', alt: 'Snow-Capped Mountains' },
    { src: '/assets/stock_images/patagonia_river_flow_0668c2dc.jpg', alt: 'Pristine River' },
    { src: '/assets/stock_images/snow_capped_mountain_76a56650.jpg', alt: 'Mountain Wilderness' },
    { src: '/assets/stock_images/patagonia_river_flow_3e8eb265.jpg', alt: 'River Valley' },
    { src: '/assets/stock_images/mountain_river_prist_9649492c.jpg', alt: 'Mountain River' },
    { src: '/assets/stock_images/mountain_river_prist_573f3adb.jpg', alt: 'Nature Scenery' },
  ];

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-semibold text-foreground mb-4">
            Experience Patagonia
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the beauty and adventure that awaits you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-[4/3] overflow-hidden rounded-lg hover-elevate"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
