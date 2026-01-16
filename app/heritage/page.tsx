import Image from 'next/image'

export default function Heritage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-brown-900 via-brown-800 to-brown-900">
            <Image
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&q=80"
              alt="Coffee roasting machine"
              fill
              className="object-cover opacity-70"
              priority
              style={{ filter: 'sepia(30%) brightness(0.85)' }}
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <p className="text-white text-sm uppercase tracking-widest mb-4">SINCE 1992</p>
          <h1 className="heading-serif text-white">
            Our Heritage
          </h1>
        </div>
      </section>

      {/* A Legacy of Passion Section */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif-md mb-4">A Legacy of Passion</h2>
            <p className="subtitle text-brown-500">OUR ORIGIN STORY</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - History */}
            <div className="space-y-6 text-brown-700 leading-relaxed">
              <p className="text-lg">
                <span className="text-5xl font-serif float-left mr-2 leading-none text-brown-900">F</span>
                <span className="mt-1 block">
                  ounded in 1992, our journey began in a small, weathered garage in the Pacific Northwest. Armed with a single vintage roaster and a profound vision, we set out to bring the purest, most nuanced flavors of the coffee bean to our local community. In those early days, the aroma of the 'slow roast' was our only marketing. We focused on the subtle alchemy of heat and time, perfecting a technique that respected the bean's origin while coaxing out its hidden sweetness.
                </span>
              </p>
            </div>

            {/* Right Column - Philosophy */}
            <div className="space-y-6 text-brown-700 leading-relaxed">
              <p className="text-lg mb-6">
                We believe coffee is more than a simple morning ritual; it is an artisanal craft that bridges cultures. Our commitment to quality means sourcing only the finest beans through direct trade partnerships that honor the land and the people. Today, THE BEAN stands as a testament to three decades of uncompromising standards. Every cup we pour is a tribute to the farmers who cultivate the soil and the artisans who master the flame.
              </p>
              
              {/* Embedded Image */}
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80"
                  alt="Hands holding coffee beans"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones Section */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-serif-md text-center mb-16">Key Milestones</h2>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-brown-300"></div>

              {/* Milestones */}
              <div className="space-y-20">
                {/* 1992 - Left */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="text-amber-500 font-serif text-2xl mb-2">1992</div>
                    <h3 className="text-xl font-serif font-bold text-brown-900 mb-2">The First Roast</h3>
                    <p className="text-brown-600 leading-relaxed">
                      Our first batch of beans was roasted in a small garage, marking the beginning of our obsession with quality.
                    </p>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-cream-100 z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* 2005 - Right */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-cream-100 z-10"></div>
                  <div className="w-1/2 pl-8 text-left">
                    <div className="text-amber-500 font-serif text-2xl mb-2">2005</div>
                    <h3 className="text-xl font-serif font-bold text-brown-900 mb-2">Flagship Boutique</h3>
                    <p className="text-brown-600 leading-relaxed">
                      Opening our first public space allowed us to share the 'slow roast' philosophy directly with coffee lovers.
                    </p>
                  </div>
                </div>

                {/* 2010 - Left */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="text-amber-500 font-serif text-2xl mb-2">2010</div>
                    <h3 className="text-xl font-serif font-bold text-brown-900 mb-2">Direct Trade Initiative</h3>
                    <p className="text-brown-600 leading-relaxed">
                      We bypassed traditional supply chains to form direct, equitable partnerships with highland coffee farmers.
                    </p>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-cream-100 z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* 2022 - Right */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-cream-100 z-10"></div>
                  <div className="w-1/2 pl-8 text-left">
                    <div className="text-amber-500 font-serif text-2xl mb-2">2022</div>
                    <h3 className="text-xl font-serif font-bold text-brown-900 mb-2">30-Year Jubilee</h3>
                    <p className="text-brown-600 leading-relaxed">
                      Celebrating three decades of excellence and looking forward to the next generation of artisanal coffee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Pillars Section */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-serif-md text-center mb-16">Our Core Pillars</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Ethical Sourcing */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-3xl">🍃</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-4 text-center">Ethical Sourcing</h3>
              <p className="text-brown-600 leading-relaxed text-center">
                We maintain direct relationships with our farmers, ensuring fair wages and sustainable agricultural practices that protect the earth.
              </p>
            </div>

            {/* Card 2: Artisanal Craft */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-3xl">☕</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-4 text-center">Artisanal Craft</h3>
              <p className="text-brown-600 leading-relaxed text-center">
                Each batch is roasted by hand in our vintage 1950s roasters, balancing tradition with modern sensory science for the perfect profile.
              </p>
            </div>

            {/* Card 3: Community */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-4 text-center">Community</h3>
              <p className="text-brown-600 leading-relaxed text-center">
                Our boutiques are designed to be cultural sanctuaries, fostering dialogue, art, and the shared love of a beautiful cup of coffee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
