import Recipe from '@/components/Recipe'

export default function AcornSquashPage() {
  return (
    <Recipe
      title="Acorn Squash"
      description="Tender cubed acorn squash roasted to perfection after being tossed with olive oil, zesty lime juice, salt, and a hint of spicy cayenne pepper for a flavorful balance of sweet and heat."
      image="/images/acorn-squash.jpg"
      defaultServings={4}
      category="savory"
      prepTime="15 mins"
      cookTime="25 mins"
      ingredients={[
        { item: "Acorn Squash", amount: 1, unit: "large", scalable: true },
        { item: "Olive Oil", amount: 2, unit: "tbsp", scalable: true },
        { item: "Lime Juice", amount: 1, unit: "tbsp", scalable: true },
        { item: "Salt", amount: 1, unit: "tsp", scalable: false },
        { item: "Cayenne Pepper", amount: 0.25, unit: "tsp", scalable: false },
        { item: "Paprika", amount: 0.25, unit: "tsp", scalable: false }
      ]}
      instructions={[
        "Preheat oven to 400°F (200°C).",
        "Cut acorn squash in half, remove seeds, and cut into 1-inch cubes.",
        "In a large bowl, toss squash with olive oil, lime juice, salt, and cayenne.",
        "Spread on a baking sheet in a single layer.",
        "Roast for 25-30 minutes, flipping halfway through, until tender and lightly browned."
      ]}
    />
  )
}
