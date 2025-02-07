import Recipe from '@/components/Recipe'

export default function ChickenChilliPage() {
  return (
    <Recipe
      title="Chicken Chilli"
      description="Chicken chilli is a hearty and flavorful dish made with tender chicken breast, a rich and spicy tomato sauce, and a mix of vegetables."
      image="/images/chicken-chilli.jpg"
      defaultServings={8}
      category="savory"
      prepTime="15 mins"
      cookTime="1-2 hours"
      ingredients={[
        { item: "Boneless Skinless Chicken Breasts (cooked and shredded)", amount: 5, unit: "chicken Breasts", scalable: true },
        { item: "Can of diced tomatoes with zesty mild green chilies (DO NOT DRAIN)", amount: 3, unit: "cans", scalable: true },
        { item: "Can of Black beans w/ diced jalapenos (drained and rinsed)", amount: 1, unit: "cans", scalable: true },
        { item: "Can of southwestern style corn (w/ black beans, onions, and red bell peppers)", amount: 1, unit: "cans", scalable: true },
        { item: "Container of chicken stock", amount: 32, unit: "oz", scalable: true},
        { item: "Taco seasoning with jalepenos and onions", amount: 1, unit: "package", scalable: true},
        { item: "Can of various white beans (drained and rinsed)", amount: 4, unit: "cans", scalable: true},


      ]}
      instructions={[
        "Place chicken in a large skillet with water, salt and pepper on a stovetop. Cover and cook on medium to medium high until fully cooked (about 20 minutes). Remove from skillet onto cutting board and shred while tirmming away excess fat. Save 1 cup of water from skillet to add to soup.",
        "In a large pot (5 quart) combine all above ingredients and stir together. ",
        "Simmer on medium low for 1-2 hours for best flavor.",
        "Serve with jalapeno chips, shredded cheese, and sour cream. Enjoy!"
        
      ]}
    />
  )
} 