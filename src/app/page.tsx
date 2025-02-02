import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-image.jpg"
            alt="Background"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-italiana text-white">
            Pennies Recipes – A Taste of Home
            </h1>
            <p className="text-lg text-white/90 max-w-xl mx-auto">
            Delicious homemade recipes straight from Mom’s kitchen—simple, comforting, and always made with love.
            </p>
            <Link 
              href="/recipes" 
              className="inline-block bg-[#71883a] text-white px-8 py-3 rounded-md font-bold hover:bg-[#5a6e2e] transition-colors duration-300"
            >
              Browse Recipes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
