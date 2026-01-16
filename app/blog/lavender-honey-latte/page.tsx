import Link from 'next/link'
import Image from 'next/image'

export default function BlogPost() {
  return (
    <div className="bg-cream-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=1200&q=80"
                alt="Lavender Honey Latte"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-brown-900 text-white px-4 py-2 text-xs uppercase tracking-wider rounded">
                SIGNATURE SERIES
              </div>
            </div>

            {/* Article Title */}
            <h1 className="heading-serif-md mb-8">
              A Journey Through Floral Notes and Golden Sweetness
            </h1>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-brown-800 leading-relaxed space-y-6 mb-12">
              <p>
                Our Signature Lavender Honey Latte is more than just a drink—it's a curated experience 
                that transports you to Provence at dawn. Each sip tells a story of careful sourcing, 
                thoughtful pairing, and artisanal craftsmanship.
              </p>
              
              <p>
                We begin with organic lavender buds sourced from local farms in Northern California, 
                where the Mediterranean climate produces flowers with an exceptional aromatic profile. 
                These delicate purple blooms are gently dried and infused into our wildflower honey, 
                creating a sweet, floral base that's both subtle and memorable.
              </p>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-6 my-8">
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80"
                      alt="Organic Lavender"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold text-brown-900">Organic Lavender</p>
                  <p className="text-sm text-brown-500 uppercase tracking-wider">SOURCED FROM LOCAL VALLEYS</p>
                </div>
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80"
                      alt="Wildflower Honey"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold text-brown-900">Wildflower Honey</p>
                  <p className="text-sm text-brown-500 uppercase tracking-wider">PURE, UNFILTERED SWEETNESS</p>
                </div>
              </div>

              <p>
                The espresso itself comes from our proprietary blend—a medium roast with notes of 
                toasted almond and cocoa that provides the perfect foundation. When combined with 
                steamed oat milk (or your milk of choice), the lavender honey creates a harmonious 
                balance between floral elegance and coffee's natural richness.
              </p>

              <p>
                Every cup is finished with latte art that reflects the botanical inspiration of the 
                drink, turning your morning ritual into a moment of beauty and intention.
              </p>
            </div>

            {/* Share Section */}
            <div className="border-t border-brown-200 pt-6 mb-12">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-brown-900">Share this Story</span>
                <div className="flex space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-brown-300 flex items-center justify-center hover:bg-brown-100 cursor-pointer transition-colors">
                    <span className="text-sm">f</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-brown-300 flex items-center justify-center hover:bg-brown-100 cursor-pointer transition-colors">
                    <span className="text-sm">📷</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-brown-300 flex items-center justify-center hover:bg-brown-100 cursor-pointer transition-colors">
                    <span className="text-sm">📌</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="border-t border-brown-200 pt-8">
              <h2 className="heading-serif-md mb-6">Reflections (4 comments)</h2>
              
              {/* Existing Comments */}
              <div className="space-y-6 mb-8">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 rounded-full bg-brown-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">EM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-brown-900">ELENA M.</p>
                    <p className="text-sm text-brown-500 mb-2">OCT 14, 2023</p>
                    <p className="text-brown-700">
                      The photography is absolutely stunning, and the latte tastes even better! 
                      The lavender notes are so delicate, and the honey adds such a unique depth. 
                      This has become my go-to order.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">JK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-brown-900">JAMES K.</p>
                    <p className="text-sm text-brown-500 mb-2">OCT 15, 2023</p>
                    <p className="text-brown-700">
                      Does this pair well with oat milk? I'm curious if the lavender notes still 
                      come through with alternative milks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comment Form */}
              <div>
                <h3 className="heading-serif-md text-xl mb-6">Leave a Comment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brown-800 mb-2 uppercase tracking-wider">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white border border-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brown-800 mb-2 uppercase tracking-wider">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white border border-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown-800 mb-2 uppercase tracking-wider">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Share your thoughts..."
                      className="w-full px-4 py-3 bg-white border border-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-800 resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    POST COMMENT
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Stories */}
            <div className="mb-8">
              <h3 className="heading-serif-md text-xl mb-6">Related Stories</h3>
              <div className="space-y-6">
                <Link href="/blog/midnight-mocha" className="flex space-x-4 group">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=200&q=80"
                      alt="Midnight Mocha"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-brown-900 group-hover:text-brown-700 transition-colors mb-1">
                      The Midnight Mocha: A Dark Chocolate Journey
                    </p>
                    <p className="text-sm text-brown-500">OCTOBER 10, 2023</p>
                  </div>
                </Link>

                <Link href="/blog/cold-brew" className="flex space-x-4 group">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=200&q=80"
                      alt="Cold Brew"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-brown-900 group-hover:text-brown-700 transition-colors mb-1">
                      Summer Breeze: Our Cold Brew Infusions
                    </p>
                    <p className="text-sm text-brown-500">SEPTEMBER 28, 2023</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-cream-100 rounded-lg p-6">
              <h3 className="heading-serif-md text-xl mb-3">Join the Club</h3>
              <p className="text-brown-600 text-sm mb-4 leading-relaxed">
                Subscribe to our newsletter for secret recipes and early access to seasonal launches.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 bg-white border border-brown-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brown-800"
                />
                <button type="submit" className="btn-primary w-full text-sm">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
