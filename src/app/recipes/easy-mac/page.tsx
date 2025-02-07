import Recipe from '@/components/Recipe'

export default function EasyMacPage() {
  return (
    <Recipe
      title="Pennie's Easy Mac"
      description="A rich, creamy, and budget-friendly mac and cheese that makes everyone happy!"
      image="/images/easy-mac.jpg"
      defaultServings={4}
      category="savory"
      prepTime="10 mins"
      cookTime="20 mins"
      ingredients={[
        { item: "Penne Pasta", amount: 16, unit: "oz", scalable: true },
        { item: "Tillamook Colby Jack", amount: 2, unit: "packages", scalable: true },
        { item: "Whole Milk", amount: 3, unit: "cups", scalable: true },
        { item: "Flour", amount: 3, unit: "tbsp", scalable: true },
        { item: "Salted Butter", amount: 3, unit: "tbsp", scalable: true },
        { item: "Dried Mustard", amount: 1, unit: "tsp", scalable: true },
        { item: "Franks Hot Sauce", amount: 2, unit: "dashes", scalable: true },
       
      ]}
      instructions={[
        "Cook pasta 1-2 minutes past what the box directions say.",
        "While the pasta is boiling, in a medium saucepan, melt butter on low and add flour and dry mustard, whisk until blended.",
        "Slowly add the milk whisking until combined. Add the Franks hot sauce and simmer at medium heat, whisking occasionally until thickened. (About 10 minutes)",
        "Lower temp and add cheese, whisk until combined.",
        "Drain pasta, return to pot and pour in cheese mixture. Mix until well blended, put a lid on and rest for 5 minutes.",
        "Stir and serve!"
      ]}
    />
  )
} 