import Recipe from '@/components/Recipe'

export default function ChocolateChipDipPage() {
  return (
    <Recipe
      title="Very wrong, chocolate chip dip"
      description="This rich and creamy chocolate chip dip pairs perfectly with chocolate graham crackers for an indulgent treat."
      image="/images/chocolate-dip.jpg"
      defaultServings={8}
      category="sweet"
      prepTime="5 mins"
      cookTime="10 mins"
      ingredients={[
        { item: "Stick butter (softened)", amount: 1, unit: "stick", scalable: true },
        { item: "Cream cheese (softened)", amount: 8, unit: "oz", scalable: true },
        { item: "Vanilla Extract", amount: .25, unit: "tsp", scalable: true },
        { item: "Powdered Sugar", amount: .75, unit: "cups", scalable: true },
        { item: "Brown Sugar", amount: 3, unit: "tbsp", scalable: true },
        { item: "Mini Chocolate Chips", amount: .75, unit: "cups", scalable: true}
      ]}
      instructions={[
        "Combine softened butter, cream cheese, and vanilla extract in a bowl.",
        "Add powdered sugar and brown sugar to the bowl and mix until well combined.",
        "Fold in mini chocolate chips.",
        "Serve with chocolate graham crackers."
        
      ]}
    />
  )
} 