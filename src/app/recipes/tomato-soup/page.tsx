import Recipe from '@/components/Recipe'

export default function TomatoSoupPage() {
  return (
    <Recipe
      title="Tomato Soup"
      description="A creamy and comforting tomato soup made with fresh tomatoes, onions, garlic, and a hint of spices, perfect for a comforting and flavorful meal."
      image="/images/tomato-soup.jpg"
      defaultServings={4}
      category="savory"
      prepTime="10 mins"
      cookTime="4 Hours"
      ingredients={[
        { item: "Big can of crushed tomatoes", amount: 1, unit: "can", scalable: true },
        { item: "Chicken Broth", amount: 32, unit: "oz", scalable: true },
        { item: "Gournay Garlic & Fine Herb Cheese", amount: 1, unit: "package", scalable: true },
    
      ]}
      instructions={[
        "Combine chicken broth and crushed tomatoes in a crock pot.",
        "Carefully open the cheese and sit whole on top.",
        "Cook on high for 4 hours, once finished stir and serve with grilled cheese!"
        
      ]}
    />
  )
} 