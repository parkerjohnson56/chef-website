import Image from "next/image";
import Link from "next/link";
import RecipeCard from '@/components/RecipeCard'
import NewsletterForm from '@/components/NewsletterForm'



export default function Home() {
  return (
    <main>
      <section className="relative min-h-[800px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-img.jpg"
            alt="Background"
            fill
            className="object-cover brightness-[0.65]"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="bg-black/70 backdrop-blur-sm p-8 rounded-lg">
              <h1 className="text-5xl md:text-6xl font-playfair text-white">
                Pennies Recipes &ndash; A Taste of Home
              </h1>
              <p className="text-lg text-white/90 max-w-xl mx-auto mt-6">
                Delicious staple recipes straight from Mom&apos;s kitchen&mdash;simple, comforting, and always made with love.
              </p>
              <Link 
                href="/recipes" 
                className="inline-block bg-[#71883a] text-white px-8 py-3 rounded-md font-bold hover:bg-[#5a6e2e] transition-colors duration-300 mt-6"
              >
                Browse Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Chef Section */}
      <section id="about" className="py-12 md:py-20 bg-[#f9e9dc] scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left side - Chef Image */}
            <div className="flex-1 relative w-full flex justify-center">
              <div className="relative w-[280px] md:w-[450px] aspect-square overflow-hidden animate-float-up scroll-trigger stagger-3 transform-gpu will-change-transform">
                <Image
                  src="/images/chef-img.png"
                  alt="Chef Penny"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side - About Text */}
            <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-pacifico text-[#71883a]">
                Meet the Chef
              </h1>
              <h2 className="text-4xl md:text-5xl font-playfair text-[#71883a]">
                About Pennie
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#71883a]">
                Hi, I&apos;m Pennie! I&apos;ve been cooking for over 30 years, and it&apos;s truly my passion. Whether it&apos;s family dinners, experimenting with new recipes, or recreating classic dishes, I love bringing people together with good food. Cooking isn&apos;t just a skill&mdash;it&apos;s my way of sharing love and creativity. Let&apos;s make something delicious together!
              </p>
             
            </div>
          </div>
        </div>
      </section>
         {/* Featured Recipes Section */}
         <section className="py-12 md:py-20 bg-[#faf3ef]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair text-[#71883a] text-center mb-8">
              Featured Recipes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              <RecipeCard 
                title="Pennie's Easy Mac"
                description="Pennie's Easy Mac is a rich, creamy, and budget-friendly mac and cheese that costs just pennies to make!"
                image="/images/easy-mac.jpg"
                slug="easy-mac"
                category="savory"
                staggerDelay={1}
              />
              
              <RecipeCard 
                title="Raspberry Sauce"
                description="Raspberry sauce is a sweet and tangy, vibrant red sauce made from fresh or frozen raspberries, perfect for drizzling over cheesecake, pancakes, or desserts."
                image="/images/raspberry-sauce.jpg"
                slug="raspberry-sauce"
                category="sweet"
                staggerDelay={2}
              />
              
              <RecipeCard 
                title="Chicken Chilli"
                description="Chicken chilli is a hearty and flavorful dish made with tender chicken breast, a rich and spicy tomato sauce, and a mix of vegetables."
                image="/images/chicken-chilli.jpg"
                slug="chicken-chilli"
                category="savory"
                staggerDelay={3}
              />

              <div className="lg:hidden">  {/* Only show on mobile and tablet */}
                <RecipeCard 
                  title="Acorn Squash"
                  description="Tender cubed acorn squash roasted to perfection after being tossed with olive oil, zesty lime juice, salt, and a hint of spicy cayenne pepper for a flavorful balance of sweet and heat."
                  image="/images/acorn-squash.jpg"
                  slug="acorn-squash"
                  category="savory"
                  staggerDelay={4}
                />
              </div>
            </div>
            
            {/* Add See More button */}
            <div className="mt-12 text-center">
              <Link 
                href="/recipes" 
                className="inline-block bg-[#71883a] text-white px-8 py-3 rounded-md font-bold hover:bg-[#5a6e2e] transition-colors duration-300"
              >
                See More Recipes
              </Link>
            </div>
          </div>
         </section>
         {/* Newsletter Banner Section */}
         <NewsletterForm />
    </main>
  );
}
