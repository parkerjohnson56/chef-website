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
  // Placeholder recipes
  ...[...Array(6)].map((_, i) => ({
    title: "Coming Soon",
    description: "New recipe coming soon!",
    image: "/images/placeholder-recipe.jpg",
    slug: "coming-soon",
    category: "savory",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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