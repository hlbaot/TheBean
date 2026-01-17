'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AOS from 'aos'
import blog1 from '../public/img/blog1.jpg'
import blog2 from '../public/img/blog2.jpg'
import blog3 from '../public/img/blog3.jpg'

export default function Blog() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const articles = [
    {
      id: 1,
      category: 'CRAFTSMANSHIP',
      date: 'OCT 18',
      title: 'Mastering the Pour Over: A Ritual of Patience',
      description: 'The geometry of water flow and the science of extraction, simplified for your...',
      image: blog1,
    },
    {
      id: 2,
      category: 'ORIGIN',
      date: 'OCT 12',
      title: 'Behind the Bean: Our Ethiopian Yirgacheffe',
      description: 'Tracing the bright acidity and floral jasmine notes back to the high altitudes of Gedeo.',
      image: blog2,
    },
    {
      id: 3,
      category: 'LIFESTYLE',
      date: 'OCT 05',
      title: 'Morning Rituals: Finding Stillness in the Steam',
      description: 'Why the first cup of the day is more than just caffeine—its a moment of intentionality.',
      image: blog3,
    },
  ]

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Main Title Section */}
      <section className="pt-20 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="subtitle mb-4">STORIES & BREWS</p>
          <h1 className="heading-serif mb-4">The Coffee Journal</h1>
          <div className="w-24 h-0.5 bg-brown-800 mx-auto"></div>
        </div>
      </section>

      {/* Featured Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80"
              alt="Lavender Honey Latte"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-brown-900 text-white px-3 py-1 text-xs uppercase tracking-wider rounded">
              FEATURED STORY
            </div>
          </div>

          {/* Featured Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-brown-500 text-xs uppercase tracking-wider">SIGNATURES</span>
              <span className="text-brown-300">|</span>
              <span className="text-brown-500 text-xs uppercase tracking-wider">OCTOBER 24, 2024</span>
            </div>
            <h2 className="heading-serif-md mb-4">
              The Story of Our Signature Lavender Honey Latte
            </h2>
            <p className="text-brown-600 mb-6 leading-relaxed">
              A journey through the fields of Provence to the local hives of Northern California.
              Discover how we balanced delicate floral notes with the robust profile of our house
              espresso to create a timeless classic.
            </p>
            <Link
              href="/blog/lavender-honey-latte"
              className="text-brown-700 hover:text-brown-900 inline-flex items-center space-x-2 transition-colors"
            >
              <span>Read the full story</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/article-${article.id}`}
              className="group"
              data-aos="zoom-in"
            >
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-brown-500 text-xs uppercase tracking-wider">{article.category}</span>
                <span className="text-brown-300">|</span>
                <span className="text-brown-500 text-xs">{article.date}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-2 group-hover:text-brown-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-brown-600 text-sm mb-3 leading-relaxed">
                {article.description}
              </p>
              <span className="text-brown-600 text-sm hover:text-brown-900 transition-colors">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h2 className="heading-serif-md mb-4">Join the Journal</h2>
        <p className="text-brown-600 mb-8">
          Receive monthly stories about our seasonal harvests, brewing techniques, and shop events.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-3 bg-cream-100 border border-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-800"
          />
          <button className="btn-primary whitespace-nowrap">
            SUBSCRIBE
          </button>
        </div>
      </section>
    </div>
  )
}
