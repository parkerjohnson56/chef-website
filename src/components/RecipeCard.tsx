import Image from 'next/image'
import Link from 'next/link'

interface RecipeCardProps {
  title: string
  description: string
  image: string
  slug: string
  category: string
  staggerDelay?: 1 | 2 | 3
}

const RecipeCard = ({ title, description, image, slug, category, staggerDelay = 1 }: RecipeCardProps) => {
  // Function to convert markdown-style italics to HTML
  const formatDescription = (text: string) => {
    return text.replace(
      /\*(.*?)\*/g,
      '<em class="text-gray-500">$1</em>'
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden animate-float-up scroll-trigger stagger-${staggerDelay} transition-transform duration-300 hover:scale-105 transform-gpu will-change-transform`}>
      <Link href={`/recipes/${slug}`}>
        <div className="relative w-full aspect-[4/3]">
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="hidden">{category}</div>
        </div>
        <div className="p-2 md:p-4">
          <h3 className="text-base md:text-xl font-playfair text-[#71883a]">{title}</h3>
          <p 
            className="text-[11px] md:text-base text-gray-600 mt-1 md:mt-2 line-clamp-3 md:line-clamp-none"
            dangerouslySetInnerHTML={{ 
              __html: formatDescription(description) 
            }}
          />
        </div>
      </Link>
    </div>
  )
}

export default RecipeCard 