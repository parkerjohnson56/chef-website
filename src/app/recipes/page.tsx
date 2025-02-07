"use client"
import { useState } from 'react'
import Image from "next/image"
import RecipeCard from '@/components/RecipeCard'

// Define recipes array outside component to avoid recreation on each render
const recipes = [
  {
    title: "Pennie's Easy Mac",
    description: "Pennie's Easy Mac is a rich, creamy, and budget-friendly mac and cheese that costs just pennies to make!",
    image: "/images/easy-mac.jpg",
    slug: "easy-mac",
    category: "savory"
  },
  {
    title: "Raspberry Sauce",
    description: "Raspberry sauce is a sweet and tangy, vibrant red sauce made from fresh or frozen raspberries, perfect for drizzling over cheesecake, pancakes, or desserts.",
    image: "/images/raspberry-sauce.jpg",
    slug: "raspberry-sauce",
    category: "sweet"
  },
  {
    title: "Chicken Chilli",
    description: "Chicken chilli is a hearty and flavorful dish made with tender chicken breast, a rich and spicy tomato sauce, and a mix of vegetables.",
    image: "/images/chicken-chilli.jpg",
    slug: "chicken-chilli",
    category: "savory"
  },
  {
    title: "Very wrong, chocolate chip dip",
    description: "This rich and creamy chocolate chip dip pairs perfectly with chocolate graham crackers for an indulgent treat.",
    image: "/images/chocolate-dip.jpg",
    slug: "chocolate-chip-dip",
    category: "sweet"
  },
  {
    title: "Spaghetti Sauce",
    description: "A flavorful spaghetti sauce made with ripe tomatoes, fresh basil, and garlic, simmered to perfection for a rich and aromatic taste.",
    image: "/images/spaghetti-sauce.jpg",
    slug: "spaghetti-sauce",
    category: "savory"
  },
  {
    title: "Acorn Squash",
    description: "Tender cubed acorn squash roasted to perfection after being tossed with olive oil, zesty lime juice, salt, and a hint of spicy cayenne pepper for a flavorful balance of sweet and heat.",
    image: "/images/acorn-squash.jpg",
    slug: "acorn-squash",
    category: "savory"
  },
  {
    title: "Tomato Soup",
    description: "A creamy and comforting tomato soup made with fresh tomatoes, onions, garlic, and a hint of spices, perfect for a comforting and flavorful meal.",
    image: "/images/tomato-soup.jpg",
    slug: "tomato-soup",
    category: "savory"
  },
  {
    title: "Cedar Plank Salmon",
    description: "A cedar plank salmon recipe with a flavorful and tender salmon fillet, seasoned with a mix of herbs and spices, and cooked on a cedar plank for a delicious and unique flavor.",
    image: "/images/cedar-plank-salmon.jpg",
    slug: "cedar-plank-salmon",
    category: "savory"
  },
  // Placeholder recipes
  ...[...Array(4)].map(() => ({
    title: "Coming Soon",
    description: "New recipe coming soon!",
    image: "/images/placeholder-recipe.jpg",
    slug: "coming-soon",
    category: "savory"
  }))
]

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('all')

  // Filter recipes based on search query and category
  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = category === 'all' || recipe.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/recipes-hero.jpg"
            alt="Recipes Background"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-6xl font-playfair text-white text-center">
            All Recipes
          </h1>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-[#faf3ef]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#71883a]"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#71883a] bg-white"
            >
              <option value="all">All Categories</option>
              <option value="sweet">Sweet</option>
              <option value="savory">Savory</option>
            </select>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-12 md:py-20 bg-[#faf3ef]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard 
                key={recipe.slug + index}
                {...recipe}
                staggerDelay={(index % 3 + 1) as 1 | 2 | 3}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 