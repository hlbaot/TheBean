import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-brown-900 via-brown-800 to-brown-900">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80"
              alt="Coffee cup"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-cream-200 text-sm uppercase tracking-widest mb-4">WELCOME TO THE BEAN</p>
            <h1 className="heading-serif text-white mb-8">
              Enjoy Your Morning Coffee Shot
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                BOOK A TABLE
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
          <span className="text-white text-xl">‹</span>
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
          <span className="text-white text-xl">›</span>
        </button>
      </section>

      {/* Our Heritage Section */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517668808823-d0e9c2af32b0?w=800&q=80"
                alt="Barista preparing coffee"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <p className="subtitle text-brown-500 mb-4">OUR HERITAGE</p>
              <h2 className="heading-serif-md mb-6">Crafting Memories Since 1992</h2>
              <div className="space-y-4 text-brown-700 leading-relaxed">
                <p>
                  At THE BEAN, we believe that every cup tells a story. Our journey began over three decades ago 
                  with a simple vision: to bring the finest specialty coffee to our community, one carefully crafted 
                  cup at a time.
                </p>
                <p>
                  Rooted in European coffee tradition and enriched by our travels across the world's most prestigious 
                  coffee-growing regions, we've curated a selection that celebrates both heritage and innovation. 
                  Our commitment to sustainable sourcing means we work directly with micro-lot farmers, ensuring 
                  every bean meets our exacting standards for quality and ethical production.
                </p>
              </div>
              <Link href="/heritage" className="inline-block mt-6 text-brown-800 underline hover:text-brown-900 transition-colors">
                DISCOVER OUR STORY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Art of the Perfect Brew Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif-md mb-4">The Art of the Perfect Brew</h2>
            <p className="text-brown-600 text-lg max-w-2xl mx-auto">
              Refined through generations, our approach combines traditional methods with modern precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Specialty Coffee */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center">
                  <span className="text-3xl">⭐</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-3">Specialty Coffee</h3>
              <p className="text-brown-600 leading-relaxed">
                Ethically sourced beans from the world's most prestigious high-altitude plantations, rated 80+ points.
              </p>
            </div>

            {/* Feature 2: Fresh Roasted Beans */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-3">Fresh Roasted Beans</h3>
              <p className="text-brown-600 leading-relaxed">
                Our in-house roasting drum hums every morning, bringing out the unique flavor profile of every single origin.
              </p>
            </div>

            {/* Feature 3: Cozy Space */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brown-100 flex items-center justify-center">
                  <span className="text-3xl">🪑</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-3">Cozy Space</h3>
              <p className="text-brown-600 leading-relaxed">
                A sanctuary designed with natural textures and soft light, perfect for morning rituals or afternoon focus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
