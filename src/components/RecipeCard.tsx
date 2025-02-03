import Image from 'next/image'
import Link from 'next/link'

interface RecipeCardProps {
  title: string
  description: string
  image: string
  slug: string
  category: 'sweet' | 'savory'
  staggerDelay?: 1 | 2 | 3
}

const RecipeCard = ({ title, description, image, slug, category, staggerDelay = 1 }: RecipeCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden animate-float-up scroll-trigger stagger-${staggerDelay} transition-transform duration-300 hover:scale-105`}>
      <Link href={`/recipes/${slug}`}>
        <div className="relative w-full aspect-[4/3]">
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-playfair text-[#71883a]">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCard 