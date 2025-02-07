import Recipe from '@/components/Recipe'

export default function RaspberrySaucePage() {
  return (
    <Recipe
      title="Raspberry Sauce"
      description="Raspberry sauce is a sweet and tangy, vibrant red sauce made from fresh or frozen raspberries, perfect for drizzling over cheesecake, pancakes, or desserts."
      image="/images/raspberry-sauce.jpg"
      defaultServings={4}
      category="sweet"
      prepTime="5 mins"
      cookTime="20 mins"
      ingredients={[
        { item: "Jar of seedless raspberry jam", amount: 1, unit: "Jar", scalable: true },
        { item: "Container of Fresh Raspberries", amount: 2, unit: "container", scalable: true },
        { item: "Sugar", amount: .25, unit: "cups", scalable: true },
      ]}
      instructions={[
        "Combine all ingredients in a small saucepan and simmer on low until well combined, stirring occasionally.",
        "Cool before serving, and enjoy!",
        
      ]}
    />
  )
} 