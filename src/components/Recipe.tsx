"use client"

import { useState } from 'react'
import Image from 'next/image'

interface Ingredient {
  item: string
  amount: number
  unit: string
  scalable: boolean  // Some ingredients might not scale (like "pinch of salt")
}

interface RecipeProps {
  title: string
  description: string
  image: string
  defaultServings: number
  ingredients: Ingredient[]
  instructions: string[]
  prepTime?: string
  cookTime?: string
  category: 'sweet' | 'savory'
}

const Recipe = ({ 
  title, 
  description, 
  image, 
  defaultServings, 
  ingredients, 
  instructions,
  prepTime,
  cookTime,
}: RecipeProps) => {
  const [servings, setServings] = useState<number | ''>(defaultServings)  // Allow empty string in state

  // Calculate scaled ingredient amounts
  const calculateAmount = (amount: number, scalable: boolean) => {
    if (!scalable) return amount
    if (servings === '' || servings === 0) return 0
    return (amount * servings / defaultServings).toFixed(2)
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-playfair text-[#71883a] mb-4">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        {(prepTime || cookTime) && (
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            {prepTime && <p>Prep Time: {prepTime}</p>}
            {cookTime && <p>Cook Time: {cookTime}</p>}
          </div>
        )}
      </div>

      {/* Servings Calculator */}
      <div className="bg-[#faf3ef] p-4 rounded-lg mb-8">
        <label className="block text-center mb-2">
          Adjust Servings:
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            min="0"
            value={servings}
            onChange={(e) => {
              const value = e.target.value
              setServings(value === '' ? '' : parseInt(value))
            }}
            className="ml-4 w-20 px-2 py-1 rounded border border-gray-300 focus:outline-none focus:border-[#71883a]"
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Ingredients */}
        <div>
          <h2 className="text-2xl font-playfair text-[#71883a] mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-600">
                {calculateAmount(ingredient.amount, ingredient.scalable)} {ingredient.unit} {ingredient.item}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-playfair text-[#71883a] mb-4">Instructions</h2>
          <ol className="space-y-4">
            {instructions.map((step, index) => (
              <li key={index} className="text-gray-600">
                <span className="font-bold mr-2">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  )
}

export default Recipe