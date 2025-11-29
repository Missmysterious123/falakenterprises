import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImages = [
  'gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5', 'gallery-6'
];

export function GallerySection() {
  return (
    <section id="gallery" className="w-full bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 space-y-4 text-center">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium text-primary">
            Our Work
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Project Gallery
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            A glimpse into the quality and craftsmanship we bring to every project.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((imageId, index) => {
            const image = PlaceHolderImages.find(p => p.id === imageId);
            const colSpan = index === 0 || index === 3 ? 'md:col-span-2' : '';
            return (
              <div
                key={imageId}
                className={`group relative overflow-hidden rounded-lg shadow-lg animate-fade-in ${colSpan}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {image?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
