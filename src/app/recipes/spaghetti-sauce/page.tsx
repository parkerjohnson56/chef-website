import Recipe from '@/components/Recipe'

export default function SpaghettiSaucePage() {
  return (
    <Recipe
      title="Spaghetti Sauce"
      description="A flavorful spaghetti sauce made with ripe tomatoes, fresh basil, and garlic, simmered to perfection for a rich and aromatic taste."
      image="/images/spaghetti-sauce.jpg"
      defaultServings={4}
      category="savory"
      prepTime="5 mins"
      cookTime="20 mins"
      ingredients={[
        { item: "Big can of crushed tomatoes", amount: 1, unit: "can", scalable: true },
        { item: "Light olive oil", amount: 2, unit: "tbsp", scalable: true },
        { item: "Butter", amount: 2, unit: "tbsp", scalable: true },
        { item: "Crushed garlic", amount: 1, unit:"tbsp", scalable: true },
        { item: "Basil", amount: 1, unit: "cup", scalable: true },
      ]}
      instructions={[
        "If cooking with meatballs, I reccomend doubling the recipe: In a large sauce pan, melt butter and olive oil together on low.",
        "Add crushed garlic and cook until fragrant, about 1 minute.",
        "Add crushed tomatoes, basil, and salt and pepper to taste.",
        "Simmer on low for 20 minutes.",
        "Serve with spaghetti and enjoy!"
        
      ]}
    />
  )
} 