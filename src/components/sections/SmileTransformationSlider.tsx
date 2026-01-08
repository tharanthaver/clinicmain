import { InfiniteSlider } from "@/components/ui/infinite-slider";

const transformationImages = [
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
    alt: "Teeth Whitening Transformation"
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2000&auto=format&fit=crop",
    alt: "Perfect Smile Transformation"
  },
  {
    src: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2000&auto=format&fit=crop",
    alt: "Dental Restoration"
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop",
    alt: "Smile Makeover"
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000&auto=format&fit=crop",
    alt: "Orthodontic Results"
  },
  {
    src: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2000&auto=format&fit=crop",
    alt: "Confidence through Dentistry"
  }
];

export function SmileTransformationSlider() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Smile Transformations</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See the real-life results of our advanced dental treatments and how we've helped our patients regain their confidence.
        </p>
      </div>
      
      <div className="flex flex-col gap-8">
        <InfiniteSlider duration={40} gap={24}>
          {transformationImages.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl border bg-background">
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-video w-[300px] md:w-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </InfiniteSlider>

        <InfiniteSlider duration={35} gap={24} reverse>
          {transformationImages.slice().reverse().map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl border bg-background">
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-video w-[300px] md:w-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
