import Recipe from '@/components/Recipe'

export default function PlankSalmonPage() {
  return (
    <Recipe
      title="Cedar Plank Salmon"
      description="A flavorful salmon dish grilled on cedar planks and topped with a fresh tomato-caper mixture. Can also be baked in the oven for a delicious alternative."
      image="/images/cedar-plank-salmon.jpg"
      defaultServings={2}
      category="savory"
      prepTime="40 mins"
      cookTime="20 mins"
      ingredients={[
        { item: "Cedar Planks", amount: 2, unit: "grilling planks", scalable: true },
        { item: "Salmon Filets", amount: 6, unit: "oz", scalable: true },
        { item: "Tomatoes", amount: 2, unit: "whole", scalable: true },
        { item: "Lemon", amount: 1, unit: "whole", scalable: true },
        { item: "Red Onion", amount: 1, unit: "small", scalable: true },
        { item: "Capers", amount: 0.25, unit: "cup", scalable: true },
        { item: "Fresh Dill", amount: 1, unit: "bunch", scalable: true },
        { item: "Salt", amount: 0.5, unit: "tsp", scalable: false }
      ]}
      instructions={[
        "Soak cedar planks in water for at least 30 minutes before cooking.",
        "Preheat grill to 425 degrees.",
        "In small bowl combine chopped tomatoes, onion, juice of 1 lemon, capers, chopped dill and salt.",
        "Rinse salmon and place each filet on a pre soaked cedar plank. Top with mixture.",
        "Grill for 15-20 minutes or until internal temp reaches 155 degrees.",
        "Take off cedar plank to serve. Goes great with rice and roasted acorn squash.",
        "Alternative Oven Method: Skip the cedar plank and bake in oven on a foil lined cookie sheet at 425°F for 15-20 minutes until internal temp reaches 155 degrees."
      ]}
    />
  )
} 